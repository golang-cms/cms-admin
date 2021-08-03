import { useMemo } from "react";
import { FileModel, PostModel } from "../../../admin/modules/post/model/post";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useMoveFiles = (files: FileModel[], post?: PostModel) => {

    const request = useMemo(() => files.length > 0 && post?.id ? moveFiles(files, post) : undefined, [post, files]);
    return useApiResult(request);
};

const moveFiles = (files: FileModel[], post?: PostModel): IRequest => {

    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/files/${post?.id}`,
        {
            method: "PUT",
            body: JSON.stringify(files),
        },
    ];
}

export default useMoveFiles;