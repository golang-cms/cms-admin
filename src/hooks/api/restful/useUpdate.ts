import { useMemo } from "react";
import { IdBasedModel } from "../../../admin/modules/common/model/idBase";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useUpdate = <DataType extends IdBasedModel<IdType>, IdType>(apiUrl: string, data?: DataType) => {
    const request = useMemo(() => data ? updateCall(apiUrl, data) : undefined, [data, apiUrl]);
    return useApiResult(request);
};

const updateCall = <DataType extends IdBasedModel<IdType>, IdType>(apiUrl: string, data?: DataType): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${apiUrl}/${data?.id}`,
        {
            headers: requestHeaders,
            body: JSON.stringify(data),
            method: "PUT",
        },
    ];
}

export default useUpdate;