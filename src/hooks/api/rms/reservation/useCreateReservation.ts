import { useMemo } from "react";
import { IRequest } from "../../../../providers/request/Request";
import useApiResult from "../../useApiResult";
import { ReservationModel } from "../../../../admin/modules/rms/reservation/model/reservation";

const useCreateReservation = (reservation?: ReservationModel) => {
    //TODO may use it later for cache
    const request = useMemo(() => reservation ? createReservation(reservation) : undefined, [reservation]);
    return useApiResult(request);
};

const createReservation = (reservation?: ReservationModel): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/reservations`,
        {
            headers: requestHeaders,
            body: JSON.stringify(reservation),
            method: "POST",
        },
    ];
}

export default useCreateReservation;