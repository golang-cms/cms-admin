import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useGetPostsByTitle = (titleSearch: string) => {
    const request = useMemo(() => getPosts(titleSearch), [titleSearch]);
    return useApiResult(request);
};


const getPosts = (titleSearch: string): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/posts?title=like&title=${titleSearch}`,
        {
            method: "GET",
        },
    ];
};

export default useGetPostsByTitle;