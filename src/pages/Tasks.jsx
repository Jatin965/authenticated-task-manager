import React from "react";
import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";
import TaskFilter from "../components/Tasks/TaskFilter";

const Tasks = () => {
  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default Tasks;
