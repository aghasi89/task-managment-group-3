import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Project from "../Project";
import actions from "../../redux/actions";
import "./style.css";
import { projectsSelector } from "../../redux/selectors/projectsSelector";
import mainfine from "../../asets/img/mainfone.jpg"

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.projectsActiones.askForProjects());
  },[]);
  const projects=useSelector(projectsSelector)
  
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
