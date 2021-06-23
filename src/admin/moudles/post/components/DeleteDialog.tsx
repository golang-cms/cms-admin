import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import useDeletePost from "../../../../hooks/post/useDeletePost";
import { PostModel } from "../model/post";
import { Action } from "./Post";

interface DeleteDialogProps {
  open: boolean;
  onClose: (action: Action) => void;
  data?: PostModel;
}

const DeleteDialog = (props: DeleteDialogProps) => {
  const [deleteId, setDeleteId] = useState<number>();
  const [rows, error] = useDeletePost(deleteId);
  console.log("Delete post: ", rows, error);
  // const closeIt = props.onClose(Action.Delete);
  // const close = useCallback(() => closeIt, [closeIt]);
  useEffect(() => {
    if (deleteId) {
      props.onClose(Action.Delete);
      setDeleteId(undefined);
    }
  }, [rows, deleteId, props]);

  return (
    <Dialog
      open={props.open}
      onClose={() => props.onClose(Action.Delete)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Post"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure delete Post {props?.data?.title}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose(Action.Delete)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setDeleteId(props?.data?.id!);
          }}
          color="primary"
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
