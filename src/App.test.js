import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
