import { useMemo } from "react";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useImageUpload = (fileId: string, file?: File, content?: string) => {

    const request = useMemo(() => file ? uploadImage(fileId, file, content) : undefined, [fileId, content, file]);
    console.log("===== upload call =====", file, request);
    return useApiResult(request);
};

const uploadImage = (fileId: string, file: File, content?: string): IRequest => {
    console.log(content);
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