import React, { useState } from 'react';
import TodoItem from './TodoItem';


const TodoList = () => {
  const [arr, setArr] = useState([
    { id: 1, title: "Talk 2 me", checked: false, completed: false },
    { id: 2, title: "Escape", checked: false, completed: false },
    { id: 3, title: "Love you more than me", checked: false, completed: false }
  ]);
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value.length > 5) {
      setArr([...arr, { id: arr[arr.length - 1].id + 1, title: value, checked: false, completed: false }])
      setValue("")
    } else {
      alert("Длина элемента должна быть не менее 6 символов.");
    }
  }

  const idDelete = (idToDelete) => {
    const deleteArr = arr.filter(item => item.id !== idToDelete);
    setArr(deleteArr);
  };

  const toggleCheckbox = (id) => {
    setArr(arr.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked, completed: !item.completed };
      }
      return item;
    }));
  };

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Послушать" />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {arr.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            checked={item.checked}
            completed={item.completed}
            toggleCheckbox={toggleCheckbox}
            idDelete={idDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

