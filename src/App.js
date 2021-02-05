import React, { useState }  from 'react';
import data from "./data.json";

import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} />
    </div>
  );
}

export default App;
