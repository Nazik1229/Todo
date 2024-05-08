import React from 'react';

interface TodoItemProps {
  item: {
    id: number;
    title: string;
    checked: boolean;
    completed: boolean;
  };
  onToggleCheckbox: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onToggleCheckbox, onDeleteItem }) => {
  return (
    <li key={item.id} className={item.checked ? "completed" : ""}>
      <input
        className='checkbox'
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleCheckbox(item.id)}
      />
      <button className={item.completed ? "isComplete complete" : "isComplete uncomplete"}
        onClick={() => onToggleCheckbox(item.id)}>
        {item.completed ? "Completed" : "Uncomplete"}
      </button>
      <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.title}</span>
      {!item.completed && (
        <button onClick={() => onDeleteItem(item.id)}>delete</button>
      )}
    </li>
  );
};

export default TodoItem;
