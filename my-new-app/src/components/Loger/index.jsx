import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions";
import "./style.css";

export default (props) => {
  const dispatch = useDispatch();
  const logoutHendeler = useCallback(() => {
    dispatch(actions.logActiones.getLogout());
  });
  const initial = useMemo(() => {
    return props.logerName[0];
  }, [props]);
  return (
    <div className="loger">
      <div className="nameBlock">
        <div className="Initial">{initial}</div>
        <div className="logerName">{props.logerName}</div>
      </div>
      <div className="logout" onClick={logoutHendeler}>
        LOGOUT
      </div>
    </div>
  );
};
