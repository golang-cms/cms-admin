import { useMemo } from "react";
import { FileModel } from "../../../admin/modules/post/model/post";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useDeleteFiles = (doDelete: Boolean, files?: FileModel[]) => {
    const request = useMemo(() => doDelete && files && files?.length > 0 ? deleteFiles(files) : undefined, [doDelete, files]);
    return useApiResult(request);
};

const deleteFiles = (files: FileModel[]): IRequest => {
    return [
        `${process.env.REACT_APP_CONTENT_API_BASE_URL}/files`,
        {
            method: "DELETE",
            body: JSON.stringify(files),
        },
    ];
}

export default useDeleteFiles;