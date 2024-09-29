import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import layoutOne from "../components/Layouts/layoutOne";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <RegisterForm />
    </div>
  );
};

export default layoutOne(Register);
