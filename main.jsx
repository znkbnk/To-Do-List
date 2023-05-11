import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, isComplete: false }]);
      setNewTask('');
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function markTaskComplete(index) {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <label>
          New Task:
          <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.isComplete} onChange={() => markTaskComplete(index)} />
            {task.isComplete ? <del>{task.text}</del> : task.text}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
