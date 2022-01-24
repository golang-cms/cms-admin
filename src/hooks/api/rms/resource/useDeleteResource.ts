import { useMemo } from "react";
import { IRequest } from "../../../../providers/request/Request";
import useApiResult from "../../useApiResult";

const useDeleteResource = (id?: number) => {
    const request = useMemo(() => id ? deleteResource(id) : undefined
        , [id]);
    return useApiResult(request);
};


const deleteResource = (id: number): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/resources/${id}`,
        {
            headers: requestHeaders,
            method: "DELETE",
        },
    ];
};

export default useDeleteResource;