import { useMemo } from "react";
import { IRequest } from "../../../../providers/request/Request";
import useApiResult from "../../useApiResult";

const useGetResources = (updated: boolean) => {
    const request = useMemo(() => getResources(updated), [updated]);
    return useApiResult(request);
};


const getResources = (updated: boolean): IRequest => {
    return [
        `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/resources`,
        {
            method: "GET",
        },
    ];
};

export default useGetResources;