import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue) {
      const newTask = {
        id: Date.now(),
        title: inputValue,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue('');
    }
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;