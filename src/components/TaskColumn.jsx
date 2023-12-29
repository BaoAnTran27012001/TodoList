import React from 'react';
import './TaskColumn.css';
import TaskCard from './TaskCard';
const TaskColumn = ({ heading, icon, status, taskList, deleteTask }) => {
  return (
    <section className='task_column'>
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} alt='' />
        {heading}
      </h2>
      {taskList.map((task) => {
        return (
          task.status === status && (
            <TaskCard
              key={task.id}
              title={task.task}
              tags={task.tags}
              id={task.id}
              deleteTask={deleteTask}
            />
          )
        );
      })}
    </section>
  );
};

export default TaskColumn;
