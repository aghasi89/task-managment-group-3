import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberBlock from "../../components/MemberBlock";
import ProjectsBlock from "../../components/ProjectsBlock";
import membersActions from "../../redux/actions";
import "./style.css";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(membersActions.membersActions.askForMembers());
  }, []);

  return (
    <div className="mainBlock">
      <MemberBlock />
      <ProjectsBlock />
    </div>
  );
};
