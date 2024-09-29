import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import { v4 as uuidv4 } from "uuid"; // For generating unique task IDs

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      dispatch(
        addTask({
          id: uuidv4(),
          title: taskTitle,
          completed: false,
        })
      );
      setTaskTitle("");
    }
  };

  return isAdding ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
      <button onClick={() => setIsAdding(false)}>Cancel</button>
    </form>
  ) : (
    <button onClick={() => setIsAdding(true)}>Add New Task</button>
  );
};

export default TaskForm;
