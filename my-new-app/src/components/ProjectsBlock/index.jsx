import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Project from "../Project";
import actions from "../../redux/actions";
import "./style.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.projectsActiones.askForProjects());
  });
  const progects=useSelector(state=>state.proj)
  return (
    <div className="ProjectsBlock">
      <Link to="/addProject" className="addNewProject">
        ADD NEW PROJECT
      </Link>
      <Project />
    </div>
  );
};
