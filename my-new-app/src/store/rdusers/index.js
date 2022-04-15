import { combineReducers } from "redux";
import logReduser from "./logReduser";
import membersReduser from "./membersReduser";
import projectsReduser from "./projectsReduser";
import tasksReduser from "./tasksReduser";

export default combineReducers({
  log: logReduser,
  members: membersReduser,
  projects: projectsReduser,
  tasks: tasksReduser
});
