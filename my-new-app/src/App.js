import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logActiones from "./redux/actions";
import "./styles.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import Login from "./viws/Login";
import Main from "./viws/Main";
import TaskBoard from "./viws/TaskBoard";
import TaskBlock from "./viws/TaskBlock";
import MainBlock from "./viws/MainBlock";
import AddNewMember from "./viws/AddNewMember";
import AddNewProject from "./viws/AddNewProject";
import AddNewTask from "./viws/AddNewTask";
import TasksByCategory from "./viws/TasksByCategory";
import "./styles.css";

export default function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logActiones.logActiones.getLoginStatus());
  }, []);

  const logS = useSelector((store) => store.login);
  useEffect(() => {
    setLoginStatus(logS);
    const newAction = logActiones.logActiones.deletLoginError();
    dispatch(newAction);
  }, [logS]);

  return <div className="App">{loginStatus ? <Main /> : <Login />}</div>;
}
