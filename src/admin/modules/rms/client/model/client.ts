import { IdBasedModel } from "../../../common/model/idBase";

export interface ClientModel extends IdBasedModel<number> {
    email: string;
    firstName: string;
    lastName: string;
}