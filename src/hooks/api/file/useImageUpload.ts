import { useMemo } from "react";
import { PostModel } from "../../../admin/modules/post/model/post";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useImageUpload = (fileId: string, file?: File, post?: PostModel) => {

    const request = useMemo(() => file ? uploadImage(fileId, file, post) : undefined, [fileId, post, file]);
    console.log("===== upload call =====", file, request);
    return useApiResult(request);
};

const uploadImage = (fileId: string, file: File, post?: PostModel): IRequest => {
    console.log(post);
    const formData = new FormData();
    formData.append("name", `${file.name}`);
    formData.append("file", file);
    formData.append("id", `${fileId}`)

    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/files`,
        {
            method: "POST",
            body: formData,
        },
    ];
}

export default useImageUpload;