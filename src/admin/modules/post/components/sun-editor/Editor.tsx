import { useCallback, useRef } from "react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import SunEditor, { buttonList } from "suneditor-react";
import SetOptions from "suneditor-react/dist/types/SetOptions";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import useImageUpload from "../../../../../hooks/api/file/useImageUpload";
import { FileModel, PostModel } from "../../model/post";

interface EditorProps {
  post?: PostModel;
  control: Control<PostModel>;
  fileId: string;
  setUploadedFiles: Dispatch<SetStateAction<FileModel[]>>;
}

const options: SetOptions = {
  minHeight: "400",
  height: "300",
  buttonList: buttonList.complex,
  // mode: 'balloon',
};

const Editor = (props: EditorProps) => {
  const [uploadFile, setUploadFile] = useState<File>();
  const [uploadedFileResult, error] = useImageUpload(
    props.fileId,
    uploadFile,
    props.post
  );
  console.log(error);
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
      props.setUploadedFiles((files: FileModel[]) => {
        files.push(uploadedFileResult);
        console.log(files);
        return files;
      });
    }
    setUploadFile(undefined);
  }, [uploadedFileResult, props]);

  return (
    <>
      <Controller
        render={({ field }) => (
          <SunEditor
            defaultValue={props.post?.content}
            setOptions={options}
            onImageUploadBefore={handleImageUploadBefore}
            name={field.name}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
        name="content"
        defaultValue={props.post?.content}
        control={props.control}
      />
    </>
  );
};

export default Editor;
