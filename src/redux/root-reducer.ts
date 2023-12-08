import { combineReducers } from "redux";
import { breadcrumbsReducer } from "./breadcrumb/reducer";

export interface RootState {
  breadcrumbs: string[];
}

export const rootReducer = combineReducers({
  breadcrumbs: breadcrumbsReducer,
})