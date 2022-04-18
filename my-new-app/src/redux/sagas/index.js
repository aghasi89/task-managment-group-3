import { LoginSaga } from "./loginSaga";
import { membersSaga } from "./membersSaga";

export default function* rootSaga() {
  yield LoginSaga();
}
