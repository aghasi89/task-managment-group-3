import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "./redux/actions";
import Login from "./viws/Login";
import Main from "./viws/Main";
import { loginSelector } from './redux/selectors/logSelectors';

export default function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.logActiones.getLoginStatus());
  }, []);

  const logS = useSelector(loginSelector);
  useEffect(() => {
    setLoginStatus(logS);
    const newAction = actions.logActiones.deletLoginError();
    dispatch(newAction);
  }, [logS]);

  return <div className="App">{loginStatus ? <Main /> : <Login />}</div>;
}