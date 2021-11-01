import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import courseReducer from "./courseReducer";

export default combineReducers({
  students: studentReducer,
  courses: courseReducer
});
