import { applyMiddleware, createStore } from "redux";
import createSagaMiddelware from "redux-saga";
import reduser from "./redusers";
import rootSaga from "./sagas";

const sagaMiddelware = createSagaMiddelware();
const store = createStore(reduser, applyMiddleware(sagaMiddelware));
sagaMiddelware.run(rootSaga);
export default store;
