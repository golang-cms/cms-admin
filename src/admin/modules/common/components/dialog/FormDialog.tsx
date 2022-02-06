import { Dialog, Slide, SlideProps } from "@mui/material";
import React from "react";
import { OnClose } from "../../model/onClose";
import { action } from "../../utils/action";
import DialogForm from "./DialogForm";
import { IdBasedModel } from "../../model/idBase";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { DataTransformType } from "../../restful/form";

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export type FormFields<DataType> = (
  register: UseFormRegister<FieldValues>,
  control: Control<FieldValues>,
  data?: DataType
) => JSX.Element;

interface Props<DataType, IdType> {
  headTitle: string;
  apiUrl: string;
  open: boolean;
  onClose: OnClose;
  formFields: FormFields<DataType>;
  data?: DataType;
  fullscreen?: boolean;
  dataTransform?: DataTransformType<FieldValues, DataType, IdType>;
}

const FormDialog = <
  DataType extends IdBasedModel<IdType>,
  IdType extends unknown
>(
  props: Props<DataType, IdType>
) => {
  const {
    headTitle,
    apiUrl,
    open,
    onClose,
    formFields,
    data,
    fullscreen,
    dataTransform,
  } = props;
  return (
    <Dialog
      maxWidth="sm"
      //fullWidth
      fullScreen={fullscreen ?? true}
      open={open}
      onClose={() => onClose(action(data))}
      TransitionComponent={Transition}
    >
      <DialogForm
        apiUrl={apiUrl}
        headTitle={headTitle}
        data={data}
        onClose={onClose}
        formFields={formFields}
        dataTransform={dataTransform}
      />
    </Dialog>
  );
};

export default FormDialog;
