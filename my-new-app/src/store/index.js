import { createStore, applyMiddleware } from "redux";
import redusers from "./redusers"

const store=createStore(redusers,applyMiddleware())