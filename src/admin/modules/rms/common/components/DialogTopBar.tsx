import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { OnClose } from "../../../common/model/onClose";
import { action } from "../../../common/utils/action";
import { IdBasedModel } from "../model/idBase";

interface Props<DataType extends IdBasedModel<IdType>, IdType> {
  headTitle: string;
  data?: DataType;
  onClose: OnClose;
  setDeleteId: Dispatch<SetStateAction<IdType | undefined>>;
}

const DialogTopBar = <
  DataType extends IdBasedModel<IdType>,
  IdType extends unknown
>(
  props: Props<DataType, IdType>
) => {
  const { headTitle, data, onClose, setDeleteId: setDeleteId } = props;
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={() => onClose(action(data))}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {headTitle}
        </Typography>
        {data?.id ? (
          <Button color="inherit" onClick={() => setDeleteId(data?.id)}>
            delete
          </Button>
        ) : (
          ""
        )}
        <Button autoFocus color="inherit" type="submit">
          save
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default DialogTopBar;
