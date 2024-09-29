import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { setTasksForUser } from "../../redux/slices/taskSlice";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/tasks");
    }
  }, [navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setError("User already exists. Please login or choose a different username.");
    } else {
      // Save the new user to localStorage
      users.push({ username, password });
      dispatch(login({ username }));
      dispatch(setTasksForUser(username));
      localStorage.setItem("loggedInUser", username);
      localStorage.setItem("users", JSON.stringify(users));

      // Redirect to login page
      navigate("/tasks");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          value={username}
          placeholder="Enter a unique username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter a password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
