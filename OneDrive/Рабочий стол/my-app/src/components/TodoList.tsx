import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: {
    id: number;
    title: string;
    checked: boolean;
    completed: boolean;
  }[];
  onToggleCheckbox: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onToggleCheckbox, onDeleteItem }) => {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} item={item} onToggleCheckbox={onToggleCheckbox} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  );
};

export default TodoList;

