import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./style.css";
import logo from "../../asets/img/ttm.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logActiones from "../../redux/actions";
import Loger from "../../components/Loger";
import MainBlock from "../MainBlock";
import AddNewMember from "../AddNewMember";
import AddNewProject from "../AddNewProject";
import TasksBord from "../TaskBoard";
import TasksBlock from "../TasksBlock";
import AddNewTask from "../AddNewTask"
import  {logedMemberSelector} from "../../redux/selectors/logSelectors"
import mainHeaderBG from "../../asets/img/mainHeaderBG.jpg"

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logActiones.logActiones.askForLogerMember());
  }, []);

  const logedMember = useSelector(logedMemberSelector);
  const [loger, setLoger] = useState("I");
  useEffect(() => {
    setLoger(logedMember.name);
  }, [logedMember]);
  return (
    <div className="main">
      <header className="header">
        <img src={logo} className="main-Logo"></img>
        <Loger logerName={loger} />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/mainBlock" element={<MainBlock />} />
          <Route path="/newMember" element={<AddNewMember />} />
          <Route path="/addProject" element={<AddNewProject />} />
          <Route path="/tasksBord" element={<TasksBord />} >
             <Route path="tasksBlock" element={<TasksBlock/>}/>
             <Route path="newTask" element={<AddNewTask/>}/>
          </Route>
          <Route path="*" element={<Navigate to="mainBlock" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
