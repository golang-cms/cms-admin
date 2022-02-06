import { Dispatch, SetStateAction } from "react";
import { Action } from "../model/ActionEnum";
import { OnClose } from "../model/onClose";

export const onClose = <DataType>(
    setOpenSave: Dispatch<SetStateAction<boolean>>,
    setOpenDelete: Dispatch<SetStateAction<boolean>>,
    refetchToggle: boolean,
    setRefetchToggle: Dispatch<SetStateAction<boolean>>,
    setDialogData: Dispatch<SetStateAction<DataType | undefined>>,
): OnClose => (action: Action) => handleClose(
    action,
    setOpenSave,
    setOpenDelete,
    refetchToggle,
    setRefetchToggle,
    setDialogData

);

const handleClose = <DataType>(
    action: Action,
    setOpenSave: Dispatch<SetStateAction<boolean>>,
    setOpenDelete: Dispatch<SetStateAction<boolean>>,
    refetchToggle: boolean,
    setRefetchToggle: Dispatch<SetStateAction<boolean>>,
    setDialogData: Dispatch<SetStateAction<DataType | undefined>>,
) => {
    switch (action) {
        case Action.Create:
        case Action.Update:
            setOpenSave(false);
            break;
        case Action.Delete:
            console.log("delete here", refetchToggle);
            if (setOpenDelete) {
                setOpenDelete(false);
            }
            break;
    }
    if (setDialogData) {
        setDialogData(undefined);
    }
    setRefetchToggle(!refetchToggle);
};