import { combineReducers } from "redux";
import { breadcrumbsReducer } from "./breadcrumb/reducer";

export const rootReducer = combineReducers({
  breadcrumbs: breadcrumbsReducer,
})

// export type RootState = ReturnType<typeof rootReducer>;