import { Dispatch, SetStateAction } from "react";
import { Action } from "../../../common/model/ActionEnum";

const formOnSubmit = <SubmitDataType, DataModelType, IdType>(
    submitData: SubmitDataType,
    setCreateModel: Dispatch<SetStateAction<DataModelType | SubmitDataType>>,
    setUpdateModel: Dispatch<SetStateAction<DataModelType | SubmitDataType>>,
    action: Action,
    id?: IdType,
    dataTransform?: (submitData: SubmitDataType) => DataModelType,
) => {

    let apiDataModel: SubmitDataType | DataModelType = submitData;
    if (dataTransform) {
        apiDataModel = dataTransform(submitData);
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