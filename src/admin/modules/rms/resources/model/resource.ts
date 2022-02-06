import { IdBasedModel } from "../../../common/model/idBase";

export interface ResourceModel extends IdBasedModel<number> {
    title?: string;
    description?: string;
}