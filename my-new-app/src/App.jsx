import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import Login from "./views/Login";
import Main from "./views/Main";
import TasksBord from "./views/TasksBord";
import TaskBlock from "./views/TaskBlock";
import MainBlock from "./views/MainBlock";
import AddNewMember from "./views/AddNewMember";
import AddNewProject from "./views/AddNewProject";
import AddNewTask from "./views/AddNewTask";
import TasksByCategory from "./views/TasksByCategory";
import { useMemo } from "react";

const initialMembers = [
  {
    name: "Admin",
    email: "admen@gmail.com",
    pasword: "gng85"
  }
];

localStorage.setItem("members", JSON.stringify(initialMembers));
localStorage.setItem("login", JSON.stringify("gng"));
let login = JSON.parse(localStorage.getItem("login"));
export default function App() {
  const newPath = useMemo(() => {
    return login ? "/main" : "/login";
  }, [login]);
  // console.log(localStorage);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={newPath} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />}>
            <Route path="tasksBord" element={<TasksBord />}>
              <Route path="taskBlock" element={<TaskBlock />} />
              <Route path="addTask" element={<AddNewTask />} />
              <Route path="tasksByCategory" element={<TasksByCategory />} />
              <Route path="*" element={<Navigate to="tasksByCategory" />} />
            </Route>
            <Route path="mainBlock" element={<MainBlock />} />
            <Route path="addMember" element={<AddNewMember />} />
            <Route path="addProject" element={<AddNewProject />} />
            <Route path="*" element={<Navigate to="mainBlock" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
