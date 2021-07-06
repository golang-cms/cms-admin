import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useGetPosts = (updated: boolean) => {
    //TODO may use it later for cache
    const request = useMemo(() => getPosts(updated), [updated]);
    //const request = getPosts();
    return useApiResult(request);
};


const getPosts = (updated: boolean): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/posts`,
        {
            method: "GET",
        },
    ];
};

export default useGetPosts;