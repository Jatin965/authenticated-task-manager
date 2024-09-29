import React, { useEffect } from "react";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";
import TaskFilter from "../components/Tasks/TaskFilter";

import layoutOne from "../components/Layouts/layoutOne";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetTasks } from "../redux/slices/taskSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetTasks());
    navigate("/login");
  };
  return (
    <div className="tasks">
      <div className="row">
        <h2>Task Management</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default layoutOne(Tasks);
