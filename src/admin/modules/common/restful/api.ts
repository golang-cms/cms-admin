import { Dispatch, SetStateAction } from "react";
import { Action } from "../model/ActionEnum";
import { OnClose } from "../model/onClose";

export const cleanApiData = <T extends unknown>(
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

export const setErrorFromApi = (
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

