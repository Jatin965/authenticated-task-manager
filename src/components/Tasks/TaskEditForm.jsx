import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slices/taskSlice";

const TaskEditForm = ({ task, setIsEditing }) => {
  const [newTitle, setNewTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      dispatch(updateTask({ id: task.id, title: newTitle }));
      setIsEditing(false);
    }
  };

  return (
    <form className="task-edit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        required
      />
      <div className="btn-group">
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default TaskEditForm;
