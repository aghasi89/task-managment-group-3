import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberBlock from "../../components/MemberBlock";
import ProjectsBlock from "../../components/ProjectsBlock";
import "./style.css";

export default () => {
 
  return (
    <div className="mainBlock">
      <MemberBlock />
      <ProjectsBlock />
    </div>
  );
};
