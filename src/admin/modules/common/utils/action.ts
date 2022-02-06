import { Action } from "../model/ActionEnum";
import { IdBasedModel } from "../model/idBase";

export const action = <DataType extends IdBasedModel<IdType>, IdType extends unknown>(data?: DataType) =>
  data?.id ? Action.Update : Action.Create;