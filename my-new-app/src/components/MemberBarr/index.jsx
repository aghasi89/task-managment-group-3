import { useCallback, useState } from "react";
import "./style.css";
import actions from "../../redux/actions";
import { useDispatch, useSelector, } from "react-redux";
import  {logedMemberSelector} from "../../redux/selectors/logSelectors"

export default (props) => {
  const dispatch = useDispatch()
  const [deleteModal, setDeleteModal] = useState(false)
  const logedMember = useSelector(logedMemberSelector)

  const openCloseDeleteModalHendeler = useCallback(() => {
    setDeleteModal(!deleteModal)
  }, [deleteModal])

  const deleteMemberHendeler = useCallback(() => {
    setDeleteModal(!deleteModal)
    const newAction = actions.membersActions.deleteMember(props.member.password)
    if (props.member.password !== logedMember.password) {
      dispatch(newAction)
    }
  }, [deleteModal])

  return (
    <div className="memberbarr">
      <div className="memberInitial">{props.member.name[0]}</div>
      <div className="member">{props.member.name}</div>
      <div className="xButton" onClick={openCloseDeleteModalHendeler}>X</div>
      {deleteModal ? <div className="deletMemberMoadal">Delete member?
        <div className="noYesBlock">
          <div className="YesNoButton" onClick={openCloseDeleteModalHendeler}>NO</div>
          <div className="YesNoButton" onClick={deleteMemberHendeler}>YES</div>
        </div>
      </div> : null}
    </div>
  );
};
