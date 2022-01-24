import { IdBasedModel } from "../../common/model/idBase";

export interface ResourceModel extends IdBasedModel<number> {
    name?: string;
}