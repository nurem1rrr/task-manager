import React from 'react';
import { TaskProvider } from './TaskContext';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

const App = () => {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
};

export default App;
