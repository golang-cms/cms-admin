import { Dialog, Slide, SlideProps } from "@mui/material";
import React from "react";
import { OnClose } from "../../../../common/model/onClose";
import { action } from "../../../../common/utils/action";
import { ReservationModel } from "../../model/reservation";
import FormDetail from "./FormDetail";

interface DialogProps {
  open: boolean;
  onClose: OnClose;
  data?: ReservationModel;
}

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => {
  return <Slide direction="left" ref={ref} {...props} />;
});


const SaveDialog = (props: DialogProps) => {
  return (
    <Dialog
      // keepMounted
      open={props.open}
      onClose={() => props.onClose(action(props.data))}
      TransitionComponent={Transition}
    >
      <FormDetail reservation={props?.data} onClose={props.onClose} />
    </Dialog>
  );
};

export default SaveDialog;
