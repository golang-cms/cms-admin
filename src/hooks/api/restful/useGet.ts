import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useGet = (apiUrl: string, updated: boolean) => {
    const request = useMemo(() => getCall(apiUrl, updated), [updated, apiUrl]);
    return useApiResult(request);
};

const getCall = (apiUrl: string, updated: boolean): IRequest => {
    return [
        `${apiUrl}`,
        {
            method: "GET",
        },
    ];
};

export default useGet;