import { useMemo } from "react";
import { ResourceModel } from "../../../../admin/modules/rms/resources/model/resource";
import { IRequest } from "../../../../providers/request/Request";
import useApiResult from "../../useApiResult";

const useCreateResource = (resource?: ResourceModel) => {
    const request = useMemo(() => resource ? createResource(resource) : undefined, [resource]);
    return useApiResult(request);
};

const createResource = (resource?: ResourceModel): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/resources`,
        {
            headers: requestHeaders,
            body: JSON.stringify(resource),
            method: "POST",
        },
    ];
}

export default useCreateResource;