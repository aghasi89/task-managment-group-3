import { useCallback, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../redux/actions";
import "./style.css";

export default () => {
  const dispatch = useDispatch();
  const nameImput = useRef(null);
  const emailImput = useRef(null);
  const passwordImput = useRef(null);

  const newMemberHendeler = useCallback(() => {
    const payload = {
      name: nameImput.current.value,
      email: emailImput.current.value,
      password: passwordImput.current.value
    };

    dispatch(actions.membersActions.addNewMember(payload));
  });

  return (
    <div className="newMember_contener">
      <form className="newMemberForm">
        <div className="newMemberText">ADD NEW MEMBER</div>
        <label htmlfor="memberName" className="newMemberName">
          Enter name
        </label>
        <input
          ref={nameImput}
          type="text"
          name="memberName"
          id="memberName"
          className="memberName-input"
        />
        <label htmlfor="memberName" className="newMemberName">
          Enter email
        </label>
        <input
          ref={emailImput}
          type="email"
          name="memberName"
          id="memberName"
          className="memberName-input"
        />

        <label htmlfor="memberName" className="newMemberName">
          Enter password
        </label>
        <input
          ref={passwordImput}
          type="password"
          name="memberName"
          id="memberName"
          className="memberName-input"
        />

        <Link to="/mainBlock" className="AddMember" onClick={newMemberHendeler}>
          ADD
        </Link>
      </form>
    </div>
  );
};
