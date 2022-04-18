import { Link } from "react-router-dom";
import "./style.css";

export default () => {
  return (
    <Link to="/tasksBord" className="project">
      <div className="projectName">Project name</div>
      <div className="projectID">00000</div>
    </Link>
  );
};
