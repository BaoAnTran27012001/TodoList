import React, { useEffect, useState } from 'react';
import './TaskForm.css';
import Tag from './Tag';
const TaskForm = ({ taskList, setTasklist }) => {
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);
  const [taskData, setTaskData] = useState({
    id: 1,
    task: '',
    status: 'todo',
    tags: [],
  });
  function checkTagSelected(tag) {
    return taskData.tags.some((item) => item === tag);
  }
  function selectTag(tag) {
    const isTagSelected = taskData.tags.some((item) => item === tag);
    console.log(isTagSelected);
    if (isTagSelected) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!taskData.task) {
      alert('Please enter a valid task');
      return;
    }
    setTaskData((prev) => {
      return { ...prev, task: '', tags: [], id: Math.random() };
    });
    setTasklist((prev) => {
      return [...prev, taskData];
    });
  }

  return (
    <header className='app_header'>
      <form action='' onSubmit={handleSubmit}>
        <input
          name='task'
          type='text'
          className='task_input'
          placeholder='Enter your task'
          onChange={handleChange}
          value={taskData.task}
        />
        <div className='task_form_bottom_line'>
          <div>
            <Tag
              tagname='HTML'
              selectTag={selectTag}
              isSelected={checkTagSelected('HTML')}
            />
            <Tag
              tagname='CSS'
              selectTag={selectTag}
              isSelected={checkTagSelected('CSS')}
            />
            <Tag
              tagname='Javascript'
              selectTag={selectTag}
              isSelected={checkTagSelected('Javascript')}
            />
            <Tag
              tagname='React'
              selectTag={selectTag}
              isSelected={checkTagSelected('React')}
            />
          </div>
          <div>
            <select
              name='status'
              id=''
              className='task_status'
              onChange={handleChange}
            >
              <option value='todo'>To do</option>
              <option value='doing'>Doing</option>
              <option value='done'>Done</option>
            </select>
            <button type='submit' className='task_submit'>
              +Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
