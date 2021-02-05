import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, handleFilter}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleFilter={handleFilter} />
               )
           })}
           <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
       </div>
   );
};
 
export default ToDoList;