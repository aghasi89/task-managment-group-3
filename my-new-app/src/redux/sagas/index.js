import { all } from "redux-saga/effects";
import { LoginSaga } from "./loginSaga";
import { membersSaga } from "./membersSaga";
import { projectsSaga } from "./projectsSaga";
import { tasksSaga} from "./tasksSaga";

export default function* rootSaga() {
  yield all([
    LoginSaga(),
    membersSaga(),
    projectsSaga(),
    tasksSaga()
  ])
  
}
