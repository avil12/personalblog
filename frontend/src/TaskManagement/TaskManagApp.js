// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './Task.css';

const TaskManagerApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="taskapp">
      <h1>To Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggleComplete={toggleComplete} 
      />
    </div>
  );
};

export default TaskManagerApp;
