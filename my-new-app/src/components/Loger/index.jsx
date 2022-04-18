import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import logActiones from "../../redux/actions";
import "./style.css";

export default (props) => {
  const dispatch = useDispatch();
  const logoutHendeler = useCallback(() => {
    dispatch(logActiones.logActiones.setLogout());
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
