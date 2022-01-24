import { useMemo } from "react";
import { IRequest } from "../../../../providers/request/Request";
import useApiResult from "../../useApiResult";
import { ReservationModel } from "../../../../admin/modules/rms/reservation/model/reservation";

const useUpdateReservation = (reservation?: ReservationModel) => {
    //TODO may use it later for cache
    const request = useMemo(() => reservation ? updateReservation(reservation) : undefined, [reservation]);
    return useApiResult(request);
};

const updateReservation = (reservation?: ReservationModel): IRequest => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    return [
        `${process.env.REACT_APP_RESERVATION_API_BASE_URL}/reservations/${reservation?.id}`,
        {
            headers: requestHeaders,
            body: JSON.stringify(reservation),
            method: "PUT",
        },
    ];
}

export default useUpdateReservation;