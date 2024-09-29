import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, markTaskComplete } from '../../redux/slices/taskSlice';
import TaskEditForm from './TaskEditForm';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleMarkComplete = () => {
    dispatch(markTaskComplete(task.id));
  };

  return (
    <div className='task' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      {isEditing ? (
        <TaskEditForm task={task} setIsEditing={setIsEditing} />
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              marginRight: '10px',
            }}
          >
            {task.title}
          </span>
          <button onClick={handleMarkComplete}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
