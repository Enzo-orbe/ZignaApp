import { combineReducers } from "redux";

import ListPhonesReducer from "./reducers/ListPhonesReducer";

export default () =>
  combineReducers({
    ListPhonesReducer,
  });
