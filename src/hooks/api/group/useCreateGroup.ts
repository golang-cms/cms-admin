import { useMemo } from "react";
import { GroupModel } from "../../../admin/moudles/group/model/group";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useCreateGroup = (group?: GroupModel) => {
    //TODO may use it later for cache
    const request = useMemo(() => createGroup(group), [group]);
    return useApiResult(request);
};

const createGroup = (group?: GroupModel): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/groups`,
        {
            body: JSON.stringify(group),
            method: "POST",
        },
    ];
}

export default useCreateGroup;