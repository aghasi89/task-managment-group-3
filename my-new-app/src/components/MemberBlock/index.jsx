import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MemberBarr from "../../components/MemberBarr";
import membersActions from "../../redux/actions";
import "./style.css";

export default () => {
  const dispatch = useDispatch();
  const failuer = useSelector((store) => store.addNewMemberError);
  useEffect(() => {
    dispatch(membersActions.membersActions.askForMembers());
  }, []);
  useEffect(() => {
    dispatch(membersActions.membersActions.setmemberFaluerDelet());
  }, [failuer]);

  const members = useSelector((store) => {
    return store.members;
  });

  return (
    <div className="mambersBlock">
      <div className="membersBlock__top">Members Block</div>
      {members.map((item, index) => {
        return <MemberBarr key={index} member={item} />;
      })}
      <Link to="/newMember" className="addNewMember">
        ADD NEW MEMBER
      </Link>
      {failuer ? <div className="newMember_failuer">{failuer}</div> : null}
    </div>
  );
};
