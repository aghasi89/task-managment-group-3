import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../redux/actions";
import "./style.css";

export default (props) => {
  const dispatch = useDispatch()
  const currentProjectHendeler = useCallback(() => {
    dispatch(actions.projectsActiones.setCuuentProject(props.project))
  }, [])

  return (
    <Link to="/tasksBord/tasksBlock" className="project" onClick={currentProjectHendeler}>
      <div className="projectName">{props.project.name}</div>
      <div className="projectDedline">{props.project.dedline}</div>
      <div className="projectID">{props.project.ID}</div>
    </Link>
  );
};
