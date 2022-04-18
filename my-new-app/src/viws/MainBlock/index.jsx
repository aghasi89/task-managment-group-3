import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberBarr from "../../components/MemberBarr";
import MemberBlock from "../../components/MemberBlock";
import ProjectsBlock from "../../components/ProjectsBlock";
import membersActions from "../../redux/actions";
import "./style.css";
export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(membersActions.membersActions.askForMembers());
  }, []);

  const members = useSelector((store) => {
    return store.members;
  });

  return (
    <div className="mainBlock">
      <MemberBlock />
      <ProjectsBlock />
    </div>
  );
};
