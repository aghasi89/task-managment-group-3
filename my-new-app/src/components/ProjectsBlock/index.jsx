import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Project from "../Project";
import actions from "../../redux/actions";
import "./style.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(actions.projectsActiones.askForProjects(), "action");
    dispatch(actions.projectsActiones.askForProjects());
  });
  return (
    <div className="ProjectsBlock">
      <Link to="/addProject" className="addNewProject">
        ADD NEW PROJECT
      </Link>
      <Project />
    </div>
  );
};
