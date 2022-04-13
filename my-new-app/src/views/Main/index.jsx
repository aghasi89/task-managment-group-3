import { Outlet } from "react-router-dom";
import "./style.css";

export default () => {
  return (
    <div className="main">
      <header className="header">this is header</header>
      <Outlet />
    </div>
  );
};
