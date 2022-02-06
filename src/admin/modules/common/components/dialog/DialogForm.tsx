import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useCreate from "../../../../../hooks/api/restful/useCreate";
import useDelete from "../../../../../hooks/api/restful/useDelete";
import useUpdate from "../../../../../hooks/api/restful/useUpdate";
import { OnClose } from "../../model/onClose";
import { action } from "../../utils/action";
import { IdBasedModel } from "../../model/idBase";
import { cleanApiData, setErrorFromApi } from "../../restful/api";
import { DataTransformType, formOnSubmit } from "../../restful/form";
import AlertBox from "./DialogAlert";
import DialogTopBar from "./DialogTopBar";
import { FormFields } from "./FormDialog";

interface Props<DataType extends IdBasedModel<IdType>, IdType> {
  apiUrl: string;
  headTitle: string;
  data?: DataType;
  onClose: OnClose;
  formFields: FormFields<DataType>;
  dataTransform?: DataTransformType<FieldValues, DataType, IdType>;
}

const DialogForm = <
  DataType extends IdBasedModel<IdType>,
  IdType extends unknown
>(
  props: Props<DataType, IdType>
) => {
  const { apiUrl, headTitle, data, onClose, formFields, dataTransform } = props;
  const { register, handleSubmit, control } = useForm({
    shouldUnregister: false,
  });

  const [createModel, setCreate] = useState<
    FieldValues | DataType | undefined
  >();
  const [updateModel, setUpdate] = useState<
    FieldValues | DataType | undefined
  >();
  const [deleteId, setDeleteId] = useState<IdType | undefined>(undefined);

  const [error, setError] = useState<any | undefined>(undefined);

  const [createdModel, createErr] = useCreate(apiUrl, createModel);
  const [updatedModel, updateErr] = useUpdate(apiUrl, updateModel);
  const [deletedModel, deleteErr] = useDelete(apiUrl, deleteId);
  const currAction = action(data);

  console.log("Get err: ", createErr, updateErr, deleteErr);
  useEffect(() => {
    cleanApiData(createdModel, setCreate, onClose, currAction);
    cleanApiData(updatedModel, setUpdate, onClose, currAction);
    cleanApiData(deletedModel, setDeleteId, onClose, currAction);
    setErrorFromApi(createErr, updateErr, setError);
  }, [
    createdModel,
    updatedModel,
    deletedModel,
    currAction,
    setCreate,
    setUpdate,
    setDeleteId,
    createErr,
    updateErr,
    onClose,
  ]);

  return (
    <>
      <form
        onSubmit={handleSubmit((submitData: FieldValues) =>
          formOnSubmit<FieldValues, DataType, IdType>(
            submitData,
            setCreate,
            setUpdate,
            currAction,
            data?.id,
            dataTransform
          )
        )}
      >
        <DialogTopBar
          headTitle={headTitle}
          data={data}
          onClose={onClose}
          setDeleteId={setDeleteId}
        />
        <AlertBox setError={setError} error={error} />
        {formFields(register, control, data)}
      </form>
    </>
  );
};

export default DialogForm;
