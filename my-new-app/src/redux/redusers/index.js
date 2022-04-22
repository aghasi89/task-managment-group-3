import { combineReducers } from "redux";
import logReducer from "./logReducer";
import membersReduser from "./membersReduser";
import projectsReduser from "./projectsReduser";
import tasksReduser from "./tasksReduser";

export default combineReducers({
  logReduser:logReducer,
  membersReduser:membersReduser,
  projectsReduser :projectsReduser,
  tasksReduser:tasksReduser
})