import React, { useState }  from 'react';
import data from "./data.json";

import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const removeTask = index => {
    const newTasks = [...toDoList];
    newTasks.splice(index, 1);
    setToDoList(newTasks);
  };

  return (
    <div className="App">
      <div className="header">To Do List</div>
      <div className="create-task">
        <ToDoForm addTask={addTask}/>
      </div>
      <ToDoList toDoList={toDoList} addTask={addTask} removeTask={removeTask} />

    </div>
  );
}

export default App;
