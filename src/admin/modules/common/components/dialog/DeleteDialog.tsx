import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import useDelete from "../../../../../hooks/api/restful/useDelete";
import { Action } from "../../../common/model/ActionEnum";
import { IdBasedModel } from "../../model/idBase";
import { OnClose } from "../../model/onClose";

interface Props<DataType> {
  apiUrl: string;
  headTitle: string;
  open: boolean;
  onClose: OnClose;
  data?: DataType;
}

const DeleteDialog = <
  DataType extends IdBasedModel<IdType>,
  IdType extends unknown
>(
  props: Props<DataType>
) => {
  const { apiUrl, headTitle, open, onClose, data } = props;
  const [deleteId, setDeleteId] = useState<IdType>();
  const [deletedModel, deleteErr] = useDelete(apiUrl, deleteId);
  console.log("delete id ", deleteId, data);

  useEffect(() => {
    if (deletedModel) {
      onClose(Action.Delete);
      setDeleteId(undefined);
    }
  }, [deletedModel, deleteId, deleteErr, onClose]);

  return (
    <Dialog
      open={open}
      onClose={() => onClose(Action.Delete)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={() => onClose(Action.Delete)}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle sx={{ bgcolor: "primary.main" }} id="alert-dialog-title">
            {"Delete " + headTitle}
          </DialogTitle>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure delete ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(Action.Delete)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setDeleteId(data?.id!);
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
