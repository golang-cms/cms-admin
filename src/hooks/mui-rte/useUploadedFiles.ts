import { Dispatch, useState } from "react";
import { FileModel } from "../../admin/modules/cms/post/model/post";

export type UseFilesHook = [FileModel[], Dispatch<FileModel | undefined>];

export const useUploadedFiles = (initFiles: FileModel[]): UseFilesHook => {
    const [files, setFiles] = useState<FileModel[]>(initFiles);

    const addFile = (file?: FileModel) => {
        if (file) {
            setFiles(curFiles => {
                curFiles.push(file);
                return curFiles;
            })
        }
    }
    return [files, addFile];
}