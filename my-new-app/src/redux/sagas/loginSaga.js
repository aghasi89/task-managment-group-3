import { takeLatest, put, call } from "redux-saga/effects";
import logtypes from "../actionsTypes/logTypes";
import membersTypes from "../actionsTypes/membersTypes";
import projectsTypes from "../actionsTypes/projectsTypes";
import logActiones from "../actions";
import membersActions from "../actions";
import projectsActions from "../actions";



export function* warkerGetLogin() {
  let login = false;
  if (localStorage.getItem("login") !== null) {
    login = JSON.parse(localStorage.getItem("login"));
  }
  yield put(logActiones.logActiones.reciveLoginStatus(login));
}

export function* warkerLogin(action) {
  let members = JSON.parse(localStorage.getItem("members"));
  let logedMember = members.find((itam) => {
    if (itam.email === action.payload.email) {
      if (itam.password === action.payload.password) {
        return true;
      }
    }
    return false;
  });
  let NewAction;
  if (logedMember) {
    localStorage.setItem("login", JSON.stringify(true));
    localStorage.setItem("logedMember", JSON.stringify(logedMember));
    let login = JSON.parse(localStorage.getItem("login"));
    NewAction = logActiones.logActiones.reciveLoginStatus(login);
  } else {
    NewAction = logActiones.logActiones.loginFailuer("Wrong email or password");
  }
  yield put(NewAction);
}

export function* warkerGetLoger(action) {
  const logedMember = JSON.parse(localStorage.getItem("logedMember"));
  yield put(logActiones.logActiones.getLogedMember(logedMember));
}
export function* warkerGetLogout(action) {
  localStorage.setItem("login", JSON.stringify(false));
  let login = JSON.parse(localStorage.getItem("login"));
  let NewAction = logActiones.logActiones.reciveLoginStatus(login);
  yield put(NewAction);
}

export function* warkerGetMembers(action) {
  let members = JSON.parse(localStorage.getItem("members"));
  let NewAction = membersActions.membersActions.getMembers(members);
  yield put(NewAction);
}

export function* warkerSetMembers(action) {
  const members = JSON.parse(localStorage.getItem("members"));
  const checkMember = members.find((item) => {
    if (
      item.email === action.payload.email ||
      item.password === action.payload.password
    ) {
      return true;
    }
    return false;
  });
  if (!checkMember) {
    members.push(action.payload);
    localStorage.setItem("members", JSON.stringify(members));
    let NewAction = membersActions.membersActions.getMembers(members);
    yield put(NewAction);
  } else {
    let NewAction = membersActions.membersActions.addNewMemberFailuer(
      "Adding member is failed"
    );
    yield put(NewAction);
  }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* warkerGetMemberFaluerDelet(action) {
  let NewAction = membersActions.membersActions.getmemberFaluerDelet();
  yield call(wait, 3000);
  yield put(NewAction);
}

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
export function* warkerGetProjects(action){
let projects = [];
  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  let NewAction=projectsActions.projectsActiones.getProjects(projects)
console.log(NewAction,"SAGA END")
yield put(NewAction)
}

export function* LoginSaga() {
  console.log("hkuhkuhkuhkuhkuh SAGA1");
  yield takeLatest(logtypes.GET_LOGIN_STATUS, warkerGetLogin);
  yield takeLatest(logtypes.LOGIN, warkerLogin);
  yield takeLatest(logtypes.ASK_FOR_LOGEDMEMBER, warkerGetLoger);
  yield takeLatest(logtypes.SET_LOGOUT, warkerGetLogout);
  yield takeLatest(membersTypes.ASK_FOR_MEMBERS, warkerGetMembers);
  yield takeLatest(membersTypes.ADD_NEW_MEMBER, warkerSetMembers);
  yield takeLatest(
    membersTypes.SET_MEMBER_FAILUER_DELET,
    warkerGetMemberFaluerDelet
  );
  yield takeLatest(projectsTypes.SET_NEW_PROJECT, warkerSetProjects);
  yield takeLatest(projectsTypes.ASK_FOR_PROJECTS, warkerGetProjects);
}
