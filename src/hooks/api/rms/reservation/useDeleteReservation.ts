import { useMemo } from "react";
import { IRequest } from "../../../../providers/request/Request";
import useApiResult from "../../useApiResult";

const useDeleteReservation = (id?: number) => {
    const request = useMemo(() => id ? deleteReservation(id) : undefined
        , [id]);
    return useApiResult(request);
};


const deleteReservation = (id: number): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/reservations/${id}`,
        {
            headers: requestHeaders,
            method: "DELETE",
        },
    ];
};

export default useDeleteReservation;