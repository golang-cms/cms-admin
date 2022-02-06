import { Dispatch, SetStateAction } from "react";
import { Action } from "../model/ActionEnum";

export type DataTransformType<SubmitDataType, DataModelType, IdType> = (submitData: SubmitDataType, id?: IdType) => DataModelType;
export const formOnSubmit = <SubmitDataType, DataModelType, IdType>(
    submitData: SubmitDataType,
    setCreateModel: Dispatch<SetStateAction<DataModelType | SubmitDataType>>,
    setUpdateModel: Dispatch<SetStateAction<DataModelType | SubmitDataType>>,
    action: Action,
    id?: IdType,
    dataTransform?: DataTransformType<SubmitDataType, DataModelType, IdType>,
) => {

    let apiDataModel: SubmitDataType | DataModelType = submitData;
    if (dataTransform) {
        apiDataModel = dataTransform(submitData, id);
    }

    if (id) {
        apiDataModel = {
            ...apiDataModel,
            id
        }
    }

    console.log("submit to API", apiDataModel);
    switch (action) {
        case Action.Create:
            setCreateModel(apiDataModel);
            break;
        case Action.Update:
            setUpdateModel(apiDataModel);
            break;
        default:
            console.log("unexpected operation ", action);
            break;
    }
};