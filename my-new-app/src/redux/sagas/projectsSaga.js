import { takeLatest, put,call } from "redux-saga/effects";
import projectsTypes from "../actionsTypes/projectsTypes";
import actions from "../actions";

export function* warkerSetProjects(action) {
  console.log("SAGA RECIVE", action);

  let projects = [];
  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  let projectID;
  let isIDExist = true;
  while (isIDExist) {
    projectID = Math.floor(Math.random() * 100000);
    isIDExist = projects.find((item) => {
      if (item.ID === projectID) {
        return true;
      }
      return false;
    });
  }
  let newProject = {
    name: action.payload.name,
    dedline: action.payload.dedline,
    ID: projectID
  };

  projects.push(newProject);
  console.log(projects, "saga end");
  yield localStorage.setItem("projects", JSON.stringify(projects));
}

export function* warkerSetCurrentProject(action) {

  console.log("SAGA RECIVE", action)

  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let newAction = actions.tasksActions.getTasks(tasks)

  yield put(newAction)
  newAction = actions.projectsActiones.getCuuentProject(action.payload)

  yield put(newAction)
}

export function* warkerGiveProjects(action) {
  let projects = [];
  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  let NewAction = actions.projectsActiones.getProjects(projects)
  yield put(NewAction)
}

export function* warkerDeletProject(action) {
  let projects = [];
  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }

  let index = projects.findIndex((item) => {
    return item.ID === action.payload.ID
  })

  projects.splice(index, 1)
  yield localStorage.setItem("projects", JSON.stringify(projects));
}


export function* projectsSaga() {
  yield takeLatest(projectsTypes.SET_NEW_PROJECT, warkerSetProjects);
  yield takeLatest(projectsTypes.SET_CURRENT_PROJECT, warkerSetCurrentProject);
  yield takeLatest(projectsTypes.ASK_FOR_PROJECTS, warkerGiveProjects);
  yield takeLatest(projectsTypes.DELETE_PROJECT, warkerDeletProject);
}