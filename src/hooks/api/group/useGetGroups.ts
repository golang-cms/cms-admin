import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useGetGroups = (updated: boolean) => {
    //TODO may use it later for cache
    const request = useMemo(() => getGroups(updated), [updated]);
    //const request = getPosts();
    return useApiResult(request);
};


const getGroups = (updated: boolean): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/groups`,
        {
            method: "GET",
        },
    ];
};

export default useGetGroups;