import { useMemo } from "react";
import { GroupModel } from "../../../admin/modules/cms/group/model/group";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useUpdateGroup = (group?: GroupModel) => {
    //TODO may use it later for cache
    const request = useMemo(() => updateGroup(group), [group]);
    return useApiResult(request);
};

const updateGroup = (group?: GroupModel): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/groups/${group?.id}`,
        {
            body: JSON.stringify(group),
            method: "PUT",
        },
    ];
}

export default useUpdateGroup;