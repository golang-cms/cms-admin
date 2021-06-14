import { useMemo } from "react";
import { IRequest } from "../../providers/request/Request";
import useApiResult from "../useApiResult";

const CONTENT_API_BASE_URL = "https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1";

const useCreatePost = (post?: {}) => {
    //TODO may use it later for cache
    const request = useMemo(() => createPost(post), [post]);
    return useApiResult(request);
};

const createPost = (post?: {}): IRequest => {
    return [
        `${CONTENT_API_BASE_URL}/posts`,
        {
            body: JSON.stringify(post),
            method: "POST",
        },
    ];
}

export default useCreatePost;