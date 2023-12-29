import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
const App = () => {
  const savedData = JSON.parse(localStorage.getItem('tasks')) || [];

  const [taskList, setTasklist] = useState(savedData);
  const deleteTask = (id) => {
    const filteredTaskList = taskList.filter((task) => task.id !== id);
    setTasklist(filteredTaskList);
  };
  return (
    <div className='app'>
      <TaskForm taskList={taskList} setTasklist={setTasklist} />
      <main className='app_main'>
        <TaskColumn
          heading='To do'
          icon={todoIcon}
          status='todo'
          taskList={taskList}
          deleteTask={deleteTask}
        />
        <TaskColumn
          heading='Doing'
          icon={doingIcon}
          status='doing'
          taskList={taskList}
          deleteTask={deleteTask}
        />
        <TaskColumn
          heading='Done'
          icon={doneIcon}
          status='done'
          taskList={taskList}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
};

export default App;
