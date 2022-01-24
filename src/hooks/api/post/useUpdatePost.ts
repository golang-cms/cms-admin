import { useMemo } from "react";
import { PostModel } from "../../../admin/modules/cms/post/model/post";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useUpdatePost = (post?: PostModel) => {
    //TODO may use it later for cache
    const request = useMemo(() => updatePost(post), [post]);
    return useApiResult(request);
};

const updatePost = (post?: PostModel): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/posts/${post?.id}`,
        {
            body: JSON.stringify(post),
            method: "PUT",
        },
    ];
}

export default useUpdatePost;