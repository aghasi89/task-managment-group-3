import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './style.css'
import actions from "../../redux/actions"
import { currentProjectSelector } from "../../redux/selectors/projectsSelector";

export default () => {

  const dispatch=useDispatch()
  const currentProject=useSelector(currentProjectSelector)
  const deleteProjectHendeler=useCallback(()=>{
    const action1=actions.tasksActions.deleteAllTasksOfProject(currentProject.ID)
    const action2=actions.projectsActiones.deleteProject(currentProject)
    dispatch(action1)
    dispatch(action2)
  },[])

  return (
    <div>
      <div className="currentProject">{currentProject.name}
      <Link to="/mainBlock" className="backToMain">BACK</Link>
      <Link to="/mainBlock" className="deletProject" onClick={deleteProjectHendeler}>DELETE PROJECT</Link>
      <Link to="newTask" className="AddNewTaskButton">ADD TASK</Link>
      </div>
      <Outlet />
    </div>
  );
};
