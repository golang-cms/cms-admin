import { useMemo } from "react";
import { PostModel } from "../../../admin/modules/post/model/post";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";
import { v4 as uuid } from 'uuid';

const useImageUpload = (file?: File, post?: PostModel) => {

    const request = useMemo(() => file ? uploadImage(file, post) : undefined, [post, file]);
    console.log("===== upload call =====", file, request);
    return useApiResult(request);
};

const uploadImage = (file: File, post?: PostModel): IRequest => {
    console.log(post);
    const formData = new FormData();
    formData.append("name", `${file.name}`);
    formData.append("file", file);
    formData.append("id", `${post?.id ?? uuid()}`)

    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/files`,
        {
            method: "POST",
            body: formData,
        },
    ];
}

export default useImageUpload;