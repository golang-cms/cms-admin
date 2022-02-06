import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useDelete = <IdType>(apiUrl: string, id?: IdType) => {
    const request = useMemo(() => id ? deleteCall(apiUrl, id) : undefined
        , [id, apiUrl]);
    return useApiResult(request);
};


const deleteCall = <IdType>(apiUrl: string, id: IdType): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${apiUrl}/${id}`,
        {
            headers: requestHeaders,
            method: "DELETE",
        },
    ];
};

export default useDelete;