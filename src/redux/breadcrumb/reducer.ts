import { BreadcrumbsActionTypes } from "./action-types"

export const breadcrumbsReducer = (
  state: string[] = [],
  action: { type: string; payload: string[] }
) => {
  switch (action.type) {
    case BreadcrumbsActionTypes.SET_BREADCRUMBS:
      return action.payload;
    default:
      return state;
  }
}; 