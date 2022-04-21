import { takeLatest, put,call } from "redux-saga/effects";
import membersTypes from "../actionsTypes/membersTypes";
import actions from "../actions";


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
    let NewAction = actions.membersActions.getMembers(members);
    yield put(NewAction);
  } else {
    let NewAction = actions.membersActions.addNewMemberFailuer(
      "Adding member is failed"
    );
    yield put(NewAction);
  }
}

export function* warkerGetMembers(action) {
  let members = JSON.parse(localStorage.getItem("members"));
  let NewAction = actions.membersActions.getMembers(members);
  yield put(NewAction);
}

export function* warkerGetMemberFaluerDelet(action) {
  let NewAction = actions.membersActions.getmemberFaluerDelet();
  yield call(wait, 3000);
  yield put(NewAction);
}

export function* warkerDeleteMember(action) {
  let members = [];
  if (localStorage.getItem("members") !== null) {
    members = JSON.parse(localStorage.getItem("members"));
  }
const index=members.findIndex((item)=>{
 return item.password===action.payload
})
members.splice(index,1)
yield localStorage.setItem("members", JSON.stringify(members));
let NewAction = actions.membersActions.getMembers(members);
yield put(NewAction);
}

export function* membersSaga() {
  yield takeLatest(membersTypes.ASK_FOR_MEMBERS, warkerGetMembers);
  yield takeLatest(membersTypes.ADD_NEW_MEMBER, warkerSetMembers);
  yield takeLatest(membersTypes.SET_MEMBER_FAILUER_DELET, warkerGetMemberFaluerDelet);
  yield takeLatest(membersTypes.DELETE_MEMBER, warkerDeleteMember);
}
