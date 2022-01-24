import { useState } from "react";
import { useForm } from "react-hook-form";
import useCreateResource from "../../../../../../hooks/api/rms/resource/useCreateResource";
import useDeleteResource from "../../../../../../hooks/api/rms/resource/useDeleteResource";
import useUpdateResource from "../../../../../../hooks/api/rms/resource/useUpdateResource";
import { OnClose } from "../../../../common/model/onClose";
import { action } from "../../../../common/utils/action";
import DialogTopBar from "../../../common/components/DialogTopBar";
import { ResourceModel } from "../../model/resource";

interface Props {
  resource?: ResourceModel;
  onClose: OnClose;
}
const FormDetail = (props: Props) => {
  const { resource, onClose } = props;
  const { register, handleSubmit, control } = useForm<ResourceModel>({
    shouldUnregister: false,
  });

  const [createModel, setCreate] = useState<ResourceModel>();
  const [updateModel, setUpdate] = useState<ResourceModel>();
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined);

  const [error, setError] = useState<any | undefined>(undefined);

  const [createdResource, createErr] = useCreateResource(createModel);
  const [updatedResource, updateErr] = useUpdateResource(updateModel);
  const [deletedResource, deleteErr] = useDeleteResource(deleteId);
  const currAction = action(resource);

  console.log("Get err: ", createErr, updateErr, deleteErr);

  /*
  useEffect(() => {
    cleanApiData(createdResource, setCreate, onClose, currAction);
    cleanApiData(updatedResource, setUpdate, onClose, currAction);
    cleanApiData(deletedResource, setDeleteId, onClose, currAction);
    setErrorFromApi(createErr, updateErr, setError);
  }, [
    createdResource,
    updatedResource,
    deletedResource,
    currAction,
    setCreate,
    setUpdate,
    setDeleteId,
    createErr,
    updateErr,
    onClose,
  ]);
  */

  return (
    <>
      <form
        onSubmit={handleSubmit((submitData) =>
          {/* onSubmit(submitData, setCreate, setUpdate, currAction, resource?.id) */}
        )}
      >
        <DialogTopBar
          headTitle="Resource"
          data={resource}
          onClose={onClose}
          setDeleteId={setDeleteId}
        />
        {/* 
        <AlertBox setError={setError} error={error} /> 
        <FormFields
          reservation={props.reservation}
          register={register}
          control={control}
        />
        */}
      </form>
    </>
  );
};

export default FormDetail;
