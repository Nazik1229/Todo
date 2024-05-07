import React from 'react';

const TodoItem = ({ id, title, checked, completed, toggleCheckbox, idDelete }) => {
  return (
    <li key={id} className={checked ? "completed" : ""}>
      <input
        className='checkbox'
        type="checkbox"
        checked={checked}
        onChange={() => toggleCheckbox(id)}
      />
      <button className={completed ? "isComplete complete" : "isComplete uncomplete"} onClick={() => toggleCheckbox(id)}>
        {completed ? "Completed" : "Uncomplete"}
      </button>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</span>
      {!completed && (
        <button onClick={() => idDelete(id)}>delete</button>
      )}
    </li>
  );
}

export default TodoItem;

