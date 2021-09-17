import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useGetLanguages = (updated: boolean) => {
    const request = useMemo(() => getLanguages(updated), [updated]);
    return useApiResult(request);
};


const getLanguages = (updated: boolean): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/languages`,
        {
            method: "GET",
        },
    ];
};

export default useGetLanguages;