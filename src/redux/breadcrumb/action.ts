import { BreadcrumbsActionTypes } from "./action-types";

export const SetBreadcrumbsAction = (payload: string[]) => ({
  type: BreadcrumbsActionTypes.SET_BREADCRUMBS,
  payload,
});