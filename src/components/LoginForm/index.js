import React from "react";

function LoginForm() {
  return (
    <form className="input">
        <div className="container">
      <div className="name">
          <label for="username">Username</label>
        <input type="text"  />
      </div>
      <div className="password">
      <label for="username">Password</label>
        <input type="password"   />
      </div>
      </div>
    </form>
  );
}
export default LoginForm;