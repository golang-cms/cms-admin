import { useCallback, useRef } from "react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Control, Controller, FieldPath } from "react-hook-form";
import SunEditor, { buttonList } from "suneditor-react";
import SetOptions from "suneditor-react/dist/types/SetOptions";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import SunEditorCore from "suneditor/src/lib/core";
import useImageUpload from "../../../../../hooks/api/file/useImageUpload";
import { FileModel, PostModel } from "../../model/post";

interface EditorProps {
  content?: string;
  fieldName: FieldPath<PostModel>;
  control: Control<PostModel>;
  fileId: string;
  setUploadedFiles: Dispatch<SetStateAction<Map<number, FileModel[]>>>;
  languageId: number;
}

const options: SetOptions = {
  minHeight: "400",
  height: "300",
  buttonList: buttonList.complex,
  videoTagAttrs: {
    contenteditable: true,
  },
  attributesWhitelist: {
    video: "autoplay|muted|loop|controls",
  },
  // mode: 'balloon',
};

const Editor = (props: EditorProps) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    const { core } = sunEditor;
    console.log("is this full page ", core.options.fullPage);

    // @ts-ignore
    core.plugins.video._setTagAttrs = (element) => {
      const attrs = core.options?.videoTagAttrs;
      if (!attrs) return;

      for (const key in attrs) {
        if (!core.util.hasOwn(attrs, key)) continue;
        element.setAttribute(key, attrs[key]);
      }
    };

    editor.current = sunEditor;
  };

  const [uploadFile, setUploadFile] = useState<File>();
  const [uploadedFileResult, uploadedFileError] = useImageUpload(
    props.fileId,
    uploadFile,
    props.content
  );
  const localUploadHandlerFunc = useRef<Function>();
  const handleImageUploadBefore = useCallback(
    (files: Array<File>, info: object, uploadHandler: Function) => {
      console.log(files, info);
      setUploadFile(files[0]);
      localUploadHandlerFunc.current = (response: any) =>
        uploadHandler(response);
      return undefined;
    },
    []
  );

  useEffect(() => {
    if (uploadedFileResult && localUploadHandlerFunc.current) {
      localUploadHandlerFunc.current({
        result: [{ url: uploadedFileResult.displayUrl }],
      });
      localUploadHandlerFunc.current(undefined);
      props.setUploadedFiles((files: Map<number, FileModel[]>) => {
        let filesByLang = files.get(props.languageId);

        if (filesByLang == null) {
          filesByLang = [uploadedFileResult];
        } else {
          filesByLang?.push(uploadedFileResult);
        }

        files.set(props.languageId, filesByLang);
        console.log(files);
        return files;
      });
    }
    if (uploadedFileError && localUploadHandlerFunc.current) {
      console.log("error upload file ", uploadedFileError);
      localUploadHandlerFunc.current({ errorMessage: uploadedFileError });
      localUploadHandlerFunc.current(undefined);
    }
    setUploadFile(undefined);
  }, [uploadedFileResult, uploadedFileError, props]);

  return (
    <>
      <Controller
        render={({ field }) => (
          <SunEditor
            getSunEditorInstance={getSunEditorInstance}
            defaultValue={props.content}
            setOptions={options}
            onImageUploadBefore={handleImageUploadBefore}
            onVideoUploadBefore={handleImageUploadBefore}
            name={field.name}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
        name={props.fieldName}
        defaultValue={props.content}
        control={props.control}
      />
    </>
  );
};

export default Editor;
