import { useMemo } from "react";
import { IRequest } from "../../../../providers/request/Request";
import useApiResult from "../../useApiResult";

const useGetReservations = (updated: boolean) => {
    const request = useMemo(() => getReservations(updated), [updated]);
    return useApiResult(request);
};


const getReservations = (updated: boolean): IRequest => {
    return [
        `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/reservations`,
        {
            method: "GET",
        },
    ];
};

export default useGetReservations;