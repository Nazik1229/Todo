import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  checked: boolean;
  completed: boolean;
}

const useTodoList = () => {
  const [arr, setArr] = useState<Todo[]>([
    {
      id: 1,
      title: "Talk 2 me",
      checked: false,
      completed: false
    },
    {
      id: 2,
      title: "Escape",
      checked: false,
      completed: false
    },
    {
      id: 3,
      title: "Love you more than me",
      checked: false,
      completed: false
    }
  ]);

  const [value, setValue] = useState("");

  const addItem = () => {
    if (value.length > 5) {
      setArr([...arr, { id: arr[arr.length - 1].id + 1, title: value, checked: false, completed: false }]);
      setValue("");
    } else {
      alert("Длина элемента должна быть не менее 6 символов.");
    }
  };

  const idDelete = (idToDelete: number) => {
    const deleteArr = arr.filter(item => item.id !== idToDelete);
    setArr(deleteArr);
  };

  const toggleCheckbox = (id: number) => {
    setArr(arr.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked, completed: !item.completed };
      }
      return item;
    }));
  };

  return { arr, value, setValue, addItem, idDelete, toggleCheckbox };
};

export default useTodoList;
