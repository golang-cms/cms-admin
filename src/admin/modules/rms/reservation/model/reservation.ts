import { Moment } from "moment";
import { IdBasedModel } from "../../../common/model/idBase";
import { ClientModel } from "../../client/model/client";
import { ResourceModel } from "../../resources/model/resource";
export const formatter = "yyyy-MM-DD HH:mm:00";

export interface ReservationModel extends IdBasedModel<number> {
    title?: string;
    description?: string;
    start: Moment | string;
    end: Moment | string;
    status?: number;
    resource?: ResourceModel;
    client?: ClientModel;
}