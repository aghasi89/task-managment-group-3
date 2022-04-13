import { combineReducers } from "redux";
import loginReduser from "./loginReduser";

export default combineReducers({
 login: loginReduser,
});
