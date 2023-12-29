import React from 'react';
import deleteIcon from '../assets/delete.png';
import Tag from './Tag';

import './TaskCard.css';

const TaskCard = ({ title, tags,deleteTask,id }) => {
  return (
    <article className='task_card'>
      <p className='task_text'>{title}</p>
      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag) => {
            return <Tag key={tag} tagname={tag} isSelected={true} />;
          })}
        </div>
        <div className='task_delete' onClick={()=>deleteTask(id)}>
          <img src={deleteIcon} className='delete-icon' alt='' />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
