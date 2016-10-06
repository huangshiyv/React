import React from 'react';
import TodoForm from './TodoForm';

const Title = ({todoCount,addTodo, date}) => {
  return (
    <div>
       <div>
          <h1>to-do ({todoCount})</h1>
          <TodoForm addTodo={addTodo} date={date} />
       </div>
    </div>
  );
}

export default Title;