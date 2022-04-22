import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MemberBarr from "../../components/MemberBarr";
import actions from "../../redux/actions";
import "./style.css";
import{ membersSelector,addmemberErrorSelector} from "../../redux/selectors/membersSelectors"
import dddd from "../../asets/img/ggg.jpg"

export default () => {
  const dispatch = useDispatch();
  const failuer = useSelector(addmemberErrorSelector);
  useEffect(() => {
    dispatch(actions.membersActions.askForMembers());
  }, []);
  useEffect(() => {
    dispatch(actions.membersActions.setmemberFaluerDelet());
  }, [failuer]);
  const members = useSelector(membersSelector);

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
