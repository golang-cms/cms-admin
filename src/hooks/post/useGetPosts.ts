import { useMemo } from "react";
import { IRequest } from "../../providers/request/Request";
import useApiResult from "../useApiResult";

const CONTENT_API_BASE_URL = "https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1";

const useGetPosts = (updated: boolean) => {
    //TODO may use it later for cache
    const request = useMemo(() => getPosts(updated), [updated]);
    //const request = getPosts();
    return useApiResult(request);
};


const getPosts = (updated: boolean): IRequest => {
    return [
        `${CONTENT_API_BASE_URL}/posts`,
        {
            method: "GET",
        },
    ];
};

export default useGetPosts;