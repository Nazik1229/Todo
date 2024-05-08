import React, { useState } from 'react';
import TodoList from './components/TodoList';
import useTodoList from './components/useTodoList';
import './style.css';

const App: React.FC = () => {
  const { arr, value, setValue, addItem, idDelete, toggleCheckbox } = useTodoList();

  return (
    <div className="form">
      <h1>
        Todo-Lis
      </h1>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Послушать" />
        <button onClick={addItem}>Add</button>
      </div>
      <TodoList items={arr} onToggleCheckbox={toggleCheckbox} onDeleteItem={idDelete} />
    </div>
  );

}

export default App;

