import React, { useState, useContext } from 'react';
import TaskContext from './TaskContext';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
