import "./style.css";
export default () => {
  return (
    <div className="addProjectContener">
      <form className="newProjectForm">
        ADD NEW PROJECT
        <label htmlfor="newProjectName" className="newProjectName">
          Project name
        </label>
        <input
          type="text"
          className="memberName-input"
          name="newProjectName"
          id="newProjectName"
        />
        <label htmlfor="newProjectDedline" className="newProjectName">
          Project dedline
        </label>
        <input
          type="date"
          className="memberName-input"
          name="newProjectDedline"
          id="newProjectDedline"
        />
      </form>
    </div>
  );
};
