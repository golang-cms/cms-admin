import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import { useEffect, useState } from "react";
import useDeletePost from "../../../../../hooks/api/post/useDeletePost";
import { Action } from "../../../common/model/ActionEnum";
import { PostModel } from "../model/post";

interface DeleteDialogProps {
  open: boolean;
  onClose: (action: Action) => void;
  data?: PostModel;
}

const DeleteDialog = (props: DeleteDialogProps) => {
  const [deleteId, setDeleteId] = useState<number>();
  const [rows, error] = useDeletePost(deleteId);
  // const closeIt = props.onClose(Action.Delete);
  // const close = useCallback(() => closeIt, [closeIt]);

  useEffect(() => {
    console.log("Delete post: ", rows, error, deleteId);
    if (rows && rows.id === deleteId) {
      props.onClose(Action.Delete);
      setDeleteId(undefined);
    }
  }, [rows, deleteId, error, props]);

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
