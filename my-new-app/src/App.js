import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logActiones from "./redux/actions";
import Login from "./viws/Login";
import Main from "./viws/Main";

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