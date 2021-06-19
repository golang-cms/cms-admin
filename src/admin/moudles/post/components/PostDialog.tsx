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
import React, { useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import useCreatePost from "../../../../hooks/post/useCreatePost";
import useUpdatePost from "../../../../hooks/post/useUpdatePost";
import { PostModel } from "../model/post";

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
  onClose: () => void;
  onSaved: () => void;
  data?: PostModel;
}

const PostDialog = (props: PostDialogProps) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.onClose}
        TransitionComponent={Transition}
      >
        <Form
          open={props.open}
          onClose={props.onClose}
          onSaved={props.onSaved}
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
    watch,
    //  formState: { errors },
  } = useForm({
    shouldUnregister: false,
    defaultValues: {} as PostModel,
    // defaultValues: props.data as Post,
  });

  const [data, setData] = useState<PostModel>();
  const onSubmit = (data: PostModel) => {
    console.log(data);
    data = { ...props?.data, ...data };
    setData(data);
    props.onSaved();
    props.onClose();
  };

  console.log(watch("title"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {data ? (
        props.data ? (
          <UpdatePost data={data} />
        ) : (
          <CreatePost data={data} />
        )
      ) : (
        ""
      )}
      <TopBar onClose={props.onClose} />
      <DialogForm register={register} post={props?.data as PostModel} />
    </form>
  );
};

const CreatePost = ({ data }: { data?: PostModel }) => {
  const [rows, error] = useCreatePost(data);
  console.log(rows, error);
  return null;
};

const UpdatePost = ({ data }: { data?: PostModel }) => {
  const [rows, error] = useUpdatePost(data);
  console.log(rows, error);
  return null;
};

const DialogForm = ({
  register,
  post,
}: {
  register: UseFormRegister<PostModel>;
  post?: PostModel;
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
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Slug"
        type="slug"
        fullWidth
        {...register("slug")}
        defaultValue={post?.slug}
      />
      <TextField
        autoFocus
        margin="dense"
        id="name"
        multiline
        rows={8}
        label="Content"
        type="content"
        fullWidth
        {...register("content")}
        defaultValue={post?.content}
      />
    </DialogContent>
  );
};

const TopBar = ({ onClose }: { onClose: () => void }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onClose}
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
