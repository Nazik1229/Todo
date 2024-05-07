import React, { useState } from 'react';
import './style.css'

function App() {
  
const [arr,setArr] = useState([
    {
      id:1,
      title:"Talk 2 me"
    },
    {
      id:2,
      title:"Escape"
    },
    {
      id:3,
      title:"Love you more than me"
    }
  ])

const [value,setValue] = useState("")
  const addItem = () => {
    if(value.length > 5){
      setArr([...arr,{id:arr[arr.length - 1].id + 1, title:value}])
      setValue("")
    }
  }

const idDelete = (idToDelete) => {
    const deleteArr = arr.filter(item => item.id !== idToDelete);
    setArr(deleteArr);
};

  return (
    <div className="form">
      <h1>
        Todo-List
      </h1>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder="Послушать"/>
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {
          arr.map(item => (
            <li>
              {item.title}
              <button onClick={() => idDelete(item.id)}>
                delete
              </button>
            </li>
          )) 
        }
      </ul>
      
    </div>
  );
}

export default App;
