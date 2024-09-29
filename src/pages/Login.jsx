import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import layoutOne from "../components/Layouts/layoutOne";

const Login = () => {
  return (
    <div className="login">
      <h2>Log In To Your Account</h2>
      <LoginForm />
    </div>
  );
};

export default layoutOne(Login);
