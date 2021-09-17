import BackupIcon from "@material-ui/icons/Backup";
import WebIcon from "@material-ui/icons/Web";
import { convertToRaw } from "draft-js";
import MUIRichTextEditor, { TMUIRichTextEditorRef } from "mui-rte";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import useImageUpload from "../../../../../hooks/api/file/useImageUpload";
import { FileModel, PostModel } from "../../model/post";
import { htmlToJson, isJson, rawToJson } from "./DraftJsUtil";
import HtmlEditor, { htmlEditorHandler } from "./HtmlEditor";
import { MuiEditorType } from "./MuiEditorModel";
import UploadImagePopover, { uploadImageServer } from "./UploadImagePopover";

const editorControl = [
  "title",
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "highlight",
  "undo",
  "redo",
  "link",
  "media",
  "numberList",
  "bulletList",
  "quote",
  "code",
  "clear",
  "save",
  "upload-image",
  "html-edit",
];

interface MuiEditorProps {
  post?: PostModel;
  control: Control<PostModel>;
  setValue: UseFormSetValue<PostModel>;
  setUploadedFiles: Dispatch<SetStateAction<FileModel[]>>;
  fileId: string;
}

const MuiEditor = (props: MuiEditorProps) => {
  const ref = useRef<TMUIRichTextEditorRef>(null);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [uploadFile, setUploadFile] = useState<File>();
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [jsonContent, setJsonContent] = useState<string | null>(
    getJsonContent(props.post)
  );
  const [editorType, setEditorType] = useState<MuiEditorType>(
    MuiEditorType.RichEditor
  );

  const handleFileUpload = (file: File) => {
    console.log(file, ref.current);
    setUploadFile(file);
  };

  const [uploadedFileResult, error] = useImageUpload(props.fileId, uploadFile, props.post?.description);
  console.log(uploadedFileResult, error, uploadFile);

  useEffect(() => {
    if (uploadedFileResult) {
      ref.current?.insertAtomicBlockAsync(
        "IMAGE",
        uploadImageServer(uploadedFileResult),
        "Uploading now..."
      );
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
      <UploadImagePopover
        anchor={anchor}
        onSubmit={(data, insert) => {
          if (insert && data.file) {
            console.log(data, insert);
            handleFileUpload(data.file);
          }
          setAnchor(null);
        }}
      />
      <HtmlEditor
        htmlContent={htmlContent}
        type={editorType}
        setHtmlContent={setHtmlContent}
        setJsonContent={setJsonContent}
      />
      {/*
      <Controller
        name="content"
        control={props.control}
        render={(props) => (
          <MUIRichTextEditor
            label="content"
            ref={ref}
            controls={editorControl}
            customControls={[
              {
                name: "upload-image",
                icon: <BackupIcon />,
                type: "callback",
                onClick: (editorState, name, anchor) => {
                  console.log("update image triggered");
                  setAnchor(anchor);
                },
              },
              {
                name: "html-edit",
                icon: <WebIcon />,
                type: "callback",
                onClick: (editorState, name, anchor) => {
                  htmlEditorHandler(
                    editorState,
                    htmlContent,
                    editorType,
                    setEditorType,
                    setHtmlContent,
                    setJsonContent
                  );
                },
              },
            ]}
            draftEditorProps={{
              handleDroppedFiles: (_selectionState, files) => {
                if (files.length && (files[0] as File).name !== undefined) {
                  handleFileUpload(files[0] as File);
                  return "handled";
                }
                return "not-handled";
              },
            }}
            toolbarButtonSize="small"
            inlineToolbar
            defaultValue={jsonContent}
            onChange={(value) => {
              const content = rawToJson(
                convertToRaw(value.getCurrentContent())
              );
              props.field.onChange(content);
            }}
          />
        )}
      />
        */}
    </>
  );
};

const getJsonContent = (post?: PostModel) => {
    return "";
    /*
  if (!post?.content) {
    return null;
  }
  if (isJson(post!.content)) {
    return post!.content;
  }

  return htmlToJson(post!.content);
  */
};

export default MuiEditor;
