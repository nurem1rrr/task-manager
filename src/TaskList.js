import React, { useContext } from 'react';
import TaskContext from './TaskContext';

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
