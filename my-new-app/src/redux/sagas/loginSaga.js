import { takeLatest, put } from "redux-saga/effects";
import logtypes from "../actionsTypes/logTypes";
import actions from "../actions";


export function* warkerGetLogin() {
  let login = false;
  if (localStorage.getItem("login") !== null) {
    login = JSON.parse(localStorage.getItem("login"));
  }
  yield put(actions.logActiones.reciveLoginStatus(login));
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
    NewAction = actions.logActiones.reciveLoginStatus(login);
  } else {
    NewAction = actions.logActiones.loginFailuer("Wrong email or password");
  }
  yield put(NewAction);
}

export function* warkerGetLoger(action) {
  const logedMember = JSON.parse(localStorage.getItem("logedMember"));
  yield put(actions.logActiones.getLogedMember(logedMember));
}

export function* warkerGetLogout(action) {
  localStorage.setItem("login", JSON.stringify(false));
  let login = JSON.parse(localStorage.getItem("login"));
  let NewAction = actions.logActiones.reciveLoginStatus(login);
  yield put(NewAction);
}

export function* LoginSaga() {
  yield takeLatest(logtypes.GET_LOGIN_STATUS, warkerGetLogin);
  yield takeLatest(logtypes.LOGIN, warkerLogin);
  yield takeLatest(logtypes.ASK_FOR_LOGEDMEMBER, warkerGetLoger);
  yield takeLatest(logtypes.SET_LOGOUT, warkerGetLogout);
  
 
 
  
  
  
  
  
}
