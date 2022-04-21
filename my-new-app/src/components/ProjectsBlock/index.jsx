import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Project from "../Project";
import actions from "../../redux/actions";
import "./style.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(actions.projectsActiones.askForProjects(), "action");
    dispatch(actions.projectsActiones.askForProjects());
  },[]);
  const projects=useSelector(state=>state.projects)
  
  return (
    <div className="ProjectsBlock">
      <Link to="/addProject" className="addNewProject">
        ADD NEW PROJECT
      </Link>
      {projects.map((item,index)=>{
        return <Project key={index} project={item}/>
      })}
    </div>
  );
};
