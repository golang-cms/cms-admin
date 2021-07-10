import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useGetGroupsByTitle = (titleSearch: string) => {
    const request = useMemo(() => getGroups(titleSearch), [titleSearch]);
    return useApiResult(request);
};


const getGroups = (titleSearch: string): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/groups?title=like&title=${titleSearch}`,
        {
            method: "GET",
        },
    ];
};

export default useGetGroupsByTitle;