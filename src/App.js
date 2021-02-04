import React, { useState }  from 'react';
import './App.css';
import data from "./data.json";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
