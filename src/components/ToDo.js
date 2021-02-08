import React from 'react';
 
const ToDo = ({todo, index, removeTask}) => {

   return (
       <div>
           {todo.task}
           <button onClick={() => removeTask(index)}>X</button>
       </div>
   );
};
 
export default ToDo;