import { applyMiddleware, createStore } from "redux";
import createSagaMiddelware from "redux-saga";
import combineReducers from "./redusers";
import rootSaga from "./sagas";

const sagaMiddelware = createSagaMiddelware();
const store = createStore(combineReducers, applyMiddleware(sagaMiddelware));
sagaMiddelware.run(rootSaga);
export default store;
