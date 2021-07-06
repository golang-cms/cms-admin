import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useDeleteGroup = (id?: number) => {
    //TODO may use it later for cache
    const request = useMemo(() => id ? deleteGroup(id) : undefined
        , [id]);
    return useApiResult(request);
};


const deleteGroup = (id: number): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/groups/${id}`,
        {
            method: "DELETE",
        },
    ];
};

export default useDeleteGroup;