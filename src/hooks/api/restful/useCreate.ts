import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useCreate = <DataType>(apiUrl: string, data?: DataType) => {
    const request = useMemo(() => data ? createCall(apiUrl, data) : undefined, [data, apiUrl]);
    return useApiResult(request);
};

const createCall = <DataType>(apiUrl: string, data?: DataType): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${apiUrl}`,
        {
            headers: requestHeaders,
            body: JSON.stringify(data),
            method: "POST",
        },
    ];
}

export default useCreate;