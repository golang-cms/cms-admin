import { LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import moment from "moment";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useCreateReservation from "../../../../../../hooks/api/rms/reservation/useCreateReservation";
import useDeleteReservation from "../../../../../../hooks/api/rms/reservation/useDeleteReservation";
import useUpdateReservation from "../../../../../../hooks/api/rms/reservation/useUpdateReservation";
import { Action } from "../../../../common/model/ActionEnum";
import {
  formatter,
  ReservationModel,
} from "../../model/reservation";
import DialogTopBar from "../../../../common/components/dialog/DialogTopBar";
import FormFields from "./FormField";
import AlertBox from "../../../../common/components/dialog/DialogAlert";
import { ResourceModel } from "../../../resources/model/resource";
import { OnClose } from "../../../../common/model/onClose";
import { action } from "../../../../common/utils/action";
import { formOnSubmit } from "../../../../common/restful/form";
import { ClientModel } from "../../../client/model/client";

interface FormDetailProps {
  reservation?: ReservationModel;
  onClose: OnClose;
}

/*
const onSubmit = (
  submitReservation: ReservationModel,
  setCreateReservation: Dispatch<ReservationModel>,
  setUpdateReservation: Dispatch<ReservationModel>,
  action: Action,
  id?: number
) => {
  const { start, end } = submitReservation;
  submitReservation = {
    ...submitReservation,
    id: id,
    start: moment.utc(start).format(formatter),
    end: moment.utc(end).format(formatter),
    status: 1,
    resource: { id: 1, title: "" } as ResourceModel,
    client: {
      id: 1,
      email: "info@smartcodee.com",
      firstName: "smart",
      lastName: "codee",
    } as ClientModel,
  };
  console.log("submit", submitReservation);
  switch (action) {
    case Action.Create:
      setCreateReservation(submitReservation);
      break;
    case Action.Update:
      setUpdateReservation(submitReservation);
      break;
    default:
      console.log("unexpected operation ", action);
      break;
  }
};
*/

const dataTransform = (submitReservation: any, id?: number): ReservationModel =>
  ({
    ...submitReservation,
    id: id,
    start: moment.utc(submitReservation.start).format(formatter),
    end: moment.utc(submitReservation.end).format(formatter),
    status: 1,
    resource: { id: 1, title: "" } as ResourceModel,
    client: {
      id: 1,
      email: "info@smartcodee.com",
      firstName: "smart",
      lastName: "codee",
    } as ClientModel,
  } as ReservationModel);

const FormDetail = (props: FormDetailProps) => {
  const { onClose } = props;
  const { register, handleSubmit, control } = useForm<any>({
    shouldUnregister: false,
  });

  const [createModel, setCreate] = useState<ReservationModel>();
  const [updateModel, setUpdate] = useState<ReservationModel>();
  const [deleteId, setDeleteId] = useState<number | undefined>(undefined);

  const [error, setError] = useState<any | undefined>(undefined);

  const [createdReservation, createErr] = useCreateReservation(createModel);
  const [updatedReservation, updateErr] = useUpdateReservation(updateModel);
  const [deletedReservation, deleteErr] = useDeleteReservation(deleteId);
  const currAction = action(props?.reservation);

  console.log("Get err: ", createErr, updateErr, deleteErr);
  useEffect(() => {
    cleanApiData(createdReservation, setCreate, onClose, currAction);
    cleanApiData(updatedReservation, setUpdate, onClose, currAction);
    cleanApiData(deletedReservation, setDeleteId, onClose, currAction);
    setErrorFromApi(createErr, updateErr, setError);
  }, [
    createdReservation,
    updatedReservation,
    deletedReservation,
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
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <form
          onSubmit={handleSubmit((submitData) =>
            formOnSubmit(
              submitData,
              setCreate,
              setUpdate,
              currAction,
              props?.reservation?.id,
              dataTransform
            )
          )}
        >
          <DialogTopBar
            headTitle="Reservation"
            data={props?.reservation}
            onClose={props.onClose}
            setDeleteId={setDeleteId}
          />
          <AlertBox setError={setError} error={error} />
          <FormFields
            reservation={props.reservation}
            register={register}
            control={control}
          />
        </form>
      </LocalizationProvider>
    </>
  );
};

const cleanApiData = <T extends unknown>(
  apiResponse: any,
  setSubmitModel: Dispatch<SetStateAction<T | undefined>>,
  onClose: OnClose,
  currAction: Action
) => {
  if (apiResponse) {
    setSubmitModel(undefined);
    onClose(currAction);
  }
};

const setErrorFromApi = (
  createErr: any,
  updateErr: any,
  setError: Dispatch<SetStateAction<any>>
) => {
  console.log("set error", createErr, updateErr);
  createErr
    ? setError(createErr)
    : updateErr
    ? setError(updateErr)
    : setError(undefined);
};

export default FormDetail;
