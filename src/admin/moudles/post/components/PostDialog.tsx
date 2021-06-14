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
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import useCreatePost from "../../../../hooks/post/useCreatePost";

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
        <Form onClose={props.onClose} />
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

const Form = ({ onClose }: { onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    //  formState: { errors },
  } = useForm();

  const [data, setData] = useState();
  const [rows, error] = useCreatePost(data);
  console.log(rows, error);

  const onSubmit = (data: any) => {
    console.log(data);
    setData(data);
    onClose();
  };

  console.log(watch("title"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TopBar onClose={onClose} />
      <DialogForm register={register} />
    </form>
  );
};

const DialogForm = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
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
      />
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Slug"
        type="slug"
        fullWidth
        {...register("slug")}
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
