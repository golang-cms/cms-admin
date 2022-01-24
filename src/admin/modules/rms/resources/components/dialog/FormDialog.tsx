import { Dialog, Slide, SlideProps } from "@mui/material";
import React from "react";
import { OnClose } from "../../../../common/model/onClose";
import { action } from "../../../../common/utils/action";
import { ResourceModel } from "../../model/resource";
import FormDetail from "./FormDetail";

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  onClose: OnClose;
  resource?: ResourceModel;
}

const FormDialog = (props: Props) => {
  const { open, onClose, resource } = props;
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => onClose(action(resource))}
      TransitionComponent={Transition}
    >
      <FormDetail onClose={onClose} resource={resource} />
    </Dialog>
  );
};

export default FormDialog;
