import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../redux/actions";
import "./style.css";

export default () => {
  const dispatch=useDispatch()
  const projectName=useRef(null);
  const projectDedline=useRef(null)
  const addNewProjectHendeler=useCallback(()=>{
    const payload={
      name:projectName.current.value,
      dedline:projectDedline.current.value
    }
    dispatch(actions.projectsActiones.setNewProject(payload))
    console.log("okkkkkk",actions.projectsActiones.setNewProject(payload))
  })
  return (
    <div className="addProjectContener">
      <form className="newProjectForm">
        ADD NEW PROJECT
        <label htmlfor="newProjectName" className="newProjectName">
          Project name
        </label>
        <input ref={projectName}
          type="text"
          className="memberName-input"
          name="newProjectName"
          id="newProjectName"
        />
        <label htmlfor="newProjectDedline" className="newProjectName">
          Project dedline
        </label>
        <input ref={projectDedline}
          type="date"
          className="memberName-input"
          name="newProjectDedline"
          id="newProjectDedline"
        />
        <Link to="/mainBlock" className="newProjectADD" onClick={addNewProjectHendeler}>ADD</Link>
      </form>
    </div>
  );
};
