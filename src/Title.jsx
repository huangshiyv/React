import React from 'react';
import TodoForm from './TodoForm';

const Title = ({todoCount,addTodo, data}) => {
  return (
    <div>
       <div>
          <h1>to-do ({todoCount})</h1>
          <TodoForm addTodo={addTodo} date={data} />
       </div>
    </div>
  );
}

export default Title;