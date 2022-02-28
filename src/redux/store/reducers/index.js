import { combineReducers } from "redux";
import alreadyUsersReducer from "./alreadyUsersReducer";

const rootReducer = combineReducers({
  alreadyUsers: alreadyUsersReducer,
});

export default rootReducer;
