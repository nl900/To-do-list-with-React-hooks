import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, removeTask}) => {
   return (
       <div>
           {toDoList.map((todo, index) => {
               return (
                   <ToDo todo={todo} index={index}  removeTask={removeTask}/>
               )
           })}
       </div>
   );
};
 
export default ToDoList;