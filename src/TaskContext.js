import React, { createContext } from 'react';
import useTaskManager from './useTaskManager';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { tasks, addTask, deleteTask } = useTaskManager();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
