import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useDeletePost = (id?: number) => {
    //TODO may use it later for cache
    const request = useMemo(() => id ? deletePost(id) : undefined
        , [id]);
    return useApiResult(request);
};


const deletePost = (id: number): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/posts/${id}`,
        {
            method: "DELETE",
        },
    ];
};

export default useDeletePost;