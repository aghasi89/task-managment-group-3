import { useCallback, useRef } from "react";
import "./style.css";
import logActiones from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const emailImput = useRef(null);
  const passwordImput = useRef(null);
  const dispatch = useDispatch();

  const loginHendeler = useCallback(() => {
    const payload = {
      email: emailImput.current.value,
      password: passwordImput.current.value
    };
    const action = logActiones.logActiones.login(payload);
    dispatch(action);
  }, []);

  const failuer = useSelector((store) => store.logSinFailuerMesage);
  return (
    <div className="login__contener">
      <form className="LoginForm">
        <div className="loginText">
          Time Tasks Menehger <br />
          Login Page
        </div>
        <label htmlfor="login__mail" className="Login__label">
          Enter your email
          <input
            ref={emailImput}
            type="email"
            name="login"
            id="login__mail"
            v
          />
        </label>
        <label htmlfor="loginPasword" className="Login__label">
          Enter your email
          <input
            ref={passwordImput}
            type="password"
            name="pasword"
            id="loginPasword"
          />
        </label>
        <div className="login_submit" onClick={loginHendeler}>
          LOGIN
        </div>
        {failuer ? <div className="loginFailuer">{failuer}</div> : null}
      </form>
    </div>
  );
};
