import CloseIcon from "@mui/icons-material/Close";
import {
    AppBar,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    Slide,
    SlideProps,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import _ from "lodash";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
    Control,
    Controller,
    useForm,
    UseFormRegister,
    UseFormSetValue
} from "react-hook-form";
import useDeleteFiles from "../../../../../hooks/api/file/useDeleteFiles";
import useMoveFiles from "../../../../../hooks/api/file/useMoveFiles";
import useCreatePost from "../../../../../hooks/api/post/useCreatePost";
import useUpdatePost from "../../../../../hooks/api/post/useUpdatePost";
import { Action } from "../../../common/model/ActionEnum";
import { FileModel, PostModel, TranslationModel } from "../model/post";
import MultiSelectTypeahead from "./MultiSelectTypeahead";
import Translations, { isTranslationModified } from "./Translations";

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface PostDialogProps {
  open: boolean;
  onClose: (action: Action) => void;
  data?: PostModel;
}

const action = (data?: PostModel) => (data ? Action.Update : Action.Create);

const PostDialog = (props: PostDialogProps) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={() => props.onClose(action(props.data))}
        TransitionComponent={Transition}
      >
        <Form
          open={props.open}
          onClose={() => props.onClose(action(props.data))}
          data={props.data}
        />
      </Dialog>
    </div>
  );
};

const Form = (props: PostDialogProps) => {
  const {
    register,
    handleSubmit,
    // watch,
    control,
    setValue,
    //  formState: { errors },
  } = useForm<PostModel>({
    shouldUnregister: false,
  });
  const [uploadedFiles, setUploadedFiles] = useState<Map<number, FileModel[]>>(
    new Map(
      props.data?.translations?.map((tran: TranslationModel) => [
        tran.languageId,
        tran.files,
      ]) ?? []
    )
  );
  const [data, setData] = useState<PostModel>();
  const [stay, setStay] = useState<boolean>(false);
  const onSubmit = (data: PostModel) => {
    console.log(data);
    data = { ...props?.data, ...data };
    data.translations =
      data.translations
        .filter(
          (tran: TranslationModel, index: number) =>
            isTranslationModified(tran) ||
            props?.data?.translations[index] != null
        )
        .map((tran: TranslationModel, index: number) => {
          if (!isTranslationModified(tran)) {
            return props!.data!.translations[index];
          }
          console.log(tran, data.translations[index]);
          return { ...props?.data?.translations[index], ...tran };
        }) ?? data.translations;
    console.log("after prepend", data);
    setData(data);
  };
  // register("files");
  // console.log(watch("title"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TopBar
          data={props.data}
          onClose={props.onClose}
          uploadedFiles={uploadedFiles}
          setStay={setStay}
        />
        <DialogForm
          register={register}
          post={props?.data}
          control={control}
          setValue={setValue}
          setUploadedFiles={setUploadedFiles}
        />
      </form>
      {data &&
        (props?.data ? (
          <UpdatePost
            data={data}
            stay={stay}
            setData={setData}
            onClose={props.onClose}
          />
        ) : (
          <CreatePost
            post={data}
            stay={stay}
            setData={setData}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            onClose={props.onClose}
          />
        ))}
    </div>
  );
};

const CreatePost = ({
  post,
  stay,
  setData,
  uploadedFiles,
  setUploadedFiles,
  onClose,
}: {
  post?: PostModel;
  stay: boolean;
  setData: Dispatch<SetStateAction<PostModel | undefined>>;
  uploadedFiles: Map<number, FileModel[]>;
  setUploadedFiles: Dispatch<SetStateAction<Map<number, FileModel[]>>>;
  onClose: (action: Action) => void;
}) => {
  if (post) {
    if (!_.isEmpty(uploadedFiles)) {
      console.log(post);
      Array.from(uploadedFiles.values()).forEach((files, index) => {
        console.log(files, index);
        post.translations[index].files = files;
      });
    }
  }
  const [rows, error] = useCreatePost(post);
  console.log("Create post: ", rows, error);

  const [movedFiles, moveFileError] = useMoveFiles(
    toFlatFiles(uploadedFiles, [] as FileModel[]),
    rows
  );
  console.log("Move files: ", movedFiles, moveFileError);
  useEffect(() => {
    if (rows) {
      console.log("Create post clean data");
      if (!stay) {
        onClose(action({} as PostModel));
      }
      setData(undefined);
      setUploadedFiles({} as Map<number, FileModel[]>);
    }
  }, [rows, setData, onClose, setUploadedFiles, stay]);

  return null;
};

const UpdatePost = ({
  data,
  stay,
  setData,
  onClose,
}: {
  data?: PostModel;
  stay: boolean;
  setData: (data?: PostModel) => void;
  onClose: (action: Action) => void;
}) => {
  const [rows, error] = useUpdatePost(data);
  console.log("Update post: ", rows, error);
  useEffect(() => {
    if (rows && rows.id === data?.id) {
      console.log("update post clean data");
      if (!stay) {
        onClose(action(data));
      }
      setData(undefined);
    }
  }, [data, rows, setData, onClose, stay]);

  return null;
};

const DialogForm = ({
  register,
  post,
  control,
  setValue,
  setUploadedFiles,
}: {
  register: UseFormRegister<PostModel>;
  post?: PostModel;
  control: Control<PostModel>;
  setValue: UseFormSetValue<PostModel>;
  setUploadedFiles: Dispatch<SetStateAction<Map<number, FileModel[]>>>;
}) => {
  return (
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Title"
        type="title"
        fullWidth
        {...register("title")}
        defaultValue={post?.title}
      />
      <MultiSelectTypeahead post={post} control={control} />
      <Controller
        render={({ field }) => (
          <TextField
            margin="dense"
            id="slug"
            label="Slug"
            type="text"
            fullWidth
            {...field}
          />
        )}
        control={control}
        name="slug"
        defaultValue={post?.slug ?? ""}
      />
      <Controller
        render={({ field }) => (
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={1}
            {...field}
          />
        )}
        control={control}
        name="description"
        defaultValue={post?.description}
      />
      <Translations
        translations={post?.translations}
        postId={post?.id}
        control={control}
        setUploadedFiles={setUploadedFiles}
        register={register}
        setValue={setValue}
      />
    </DialogContent>
  );
};

const TopBar = ({
  data,
  onClose,
  uploadedFiles,
  setStay,
}: {
  data?: PostModel;
  onClose: (action: Action) => void;
  uploadedFiles: Map<number, FileModel[]>;
  setStay: Dispatch<SetStateAction<boolean>>;
}) => {
  const [doDelete, setDoDelete] = useState<boolean>(false);
  console.log(uploadedFiles);
  const [rows, error] = useDeleteFiles(
    doDelete,
    toFlatFiles(uploadedFiles, undefined)
  );

  useEffect(() => {
    if (doDelete) {
      console.log("do delete file", doDelete, uploadedFiles);
      setDoDelete(false);
      onClose(action(data));
    }
  }, [data, doDelete, onClose, uploadedFiles]);

  console.log("delete file", error, rows);
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => {
            console.log("closing dialog", uploadedFiles);
            setDoDelete(true);
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Post
        </Typography>
        <Button
          autoFocus
          color="inherit"
          type="submit"
          onClick={() => {
            setStay(true);
          }}
        >
          save and continue edit
        </Button>
        <Button
          autoFocus
          color="inherit"
          type="submit"
          onClick={() => {
            setStay(false);
          }}
        >
          save
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const toFlatFiles = (files: Map<number, FileModel[]>, defaultVal: any) =>
  _.isEmpty(files)
    ? defaultVal
    : Array.from(files.values())
        .flat()
        .filter((val: FileModel) => val != null);

export default PostDialog;
