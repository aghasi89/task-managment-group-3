import { combineReducers } from "redux";
import logReducer from "./logReducer";
import membersReduser from "./membersReduser";
import projectsReduser from "./projectsReduser";
import tasksReduser from "./tasksReduser";

export default combineReducers({
  log:logReducer,
  members:membersReduser,
  projects:projectsReduser,
  tasks:tasksReduser
})