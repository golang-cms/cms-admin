import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Control,
  Controller,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import useMoveFiles from "../../../../hooks/api/file/useMoveFiles";
import useCreatePost from "../../../../hooks/api/post/useCreatePost";
import useUpdatePost from "../../../../hooks/api/post/useUpdatePost";
import { FileModel, PostModel } from "../model/post";
import MuiEditor from "./mui-rte/MuiEditor";
import MultiSelectTypeahead from "./MultiSelectTypeahead";
import { Action } from "./Post";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

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
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
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
  const [uploadedFiles, setUploadedFiles] = useState<FileModel[]>(
    props.data?.files ?? ([] as FileModel[])
  );
  const [data, setData] = useState<PostModel>();
  const onSubmit = (data: PostModel) => {
    console.log(data);
    data = { ...props?.data, ...data };
    setData(data);
  };
  register("files");
  // console.log(watch("title"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TopBar data={props.data} onClose={props.onClose} />
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
          <UpdatePost data={data} setData={setData} onClose={props.onClose} />
        ) : (
          <CreatePost
            data={data}
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
  data,
  setData,
  uploadedFiles,
  setUploadedFiles,
  onClose,
}: {
  data?: PostModel;
  setData: Dispatch<SetStateAction<PostModel | undefined>>;
  uploadedFiles: FileModel[];
  setUploadedFiles: Dispatch<SetStateAction<FileModel[]>>;
  onClose: (action: Action) => void;
}) => {
  if (data) {
    data.files = uploadedFiles;
    console.log("============ change upload files", data);
  }
  const [rows, error] = useCreatePost(data);
  console.log("Create post: ", rows, error);

  const [movedFiles, moveFileError] = useMoveFiles(uploadedFiles, rows);
  console.log("Move files: ", movedFiles, moveFileError);
  useEffect(() => {
    if (rows) {
      console.log("Create post clean data");
      onClose(action({} as PostModel));
      setData(undefined);
      setUploadedFiles([] as FileModel[]);
    }
  }, [rows, setData, onClose, setUploadedFiles]);

  return null;
};

const UpdatePost = ({
  data,
  setData,
  onClose,
}: {
  data?: PostModel;
  setData: (data?: PostModel) => void;
  onClose: (action: Action) => void;
}) => {
  const [rows, error] = useUpdatePost(data);
  console.log("Update post: ", rows, error);
  useEffect(() => {
    if (rows && rows.id === data?.id) {
      console.log("update post clean data");
      onClose(action(data));
      setData(undefined);
    }
  }, [data, rows, setData, onClose]);

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
  setUploadedFiles: Dispatch<SetStateAction<FileModel[]>>;
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
            rows={8}
            {...field}
          />
        )}
        control={control}
        name="description"
        defaultValue={post?.description}
      />
      <MuiEditor
        post={post}
        control={control}
        setValue={setValue}
        setUploadedFiles={setUploadedFiles}
        fileId={post?.id?.toString() ?? uuid()}
      />
    </DialogContent>
  );
};

const TopBar = ({
  data,
  onClose,
}: {
  data?: PostModel;
  onClose: (action: Action) => void;
}) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => onClose(action(data))}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Post
        </Typography>
        <Button autoFocus color="inherit" type="submit">
          save
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default PostDialog;
