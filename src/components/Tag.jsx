import React from 'react';
import './Tag.css';
const Tag = ({ tagname, selectTag, isSelected }) => {
  const tagStyle = {
    HTML: { backgroundColor: '#fda821' },
    CSS: { backgroundColor: '#15d4c8' },
    Javascript: { backgroundColor: '#ffd12c' },
    React: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#f9f9f9' },
  };
  return (
    <button
      type='button'
      style={isSelected ? tagStyle[tagname] : tagStyle.default}
      className='tag'
      onClick={() => selectTag(tagname)}
    >
      {tagname}
    </button>
  );
};

export default Tag;
