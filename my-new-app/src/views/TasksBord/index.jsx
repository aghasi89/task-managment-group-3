import { Outlet } from "react-router-dom";
import "./style.css";

export default () => {
  return (
    <div>
      Project Name
      <Outlet />
    </div>
  );
};
