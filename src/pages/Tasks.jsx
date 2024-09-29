import React from "react";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";
import TaskFilter from "../components/Tasks/TaskFilter";

import layoutOne from "../components/Layouts/layoutOne";
import { logout } from "../redux/slices/authSlice";

const Tasks = () => {
  const handleLogout = () => {
    // Handle logout logic here
    dispatch(logout());
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
