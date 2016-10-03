import React from 'react';

const Todo = ({todo, remove,index}) => {
  // Each Todo
  return (
  	 <tr>
      <th scope="row">{index+1}</th>
      <td>{todo.time}</td>
      <td>{todo.item}</td>
      <td>{todo.amount}</td>
      <td>
      	
     </td>
    </tr>
  	);
  //return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo,index) => {
    return (<Todo todo={todo} key={index} index={index} emove={remove}/>)
  });
  return (
  	<div className="list-group" style={{marginTop:'30px'}}>
  		<table className="table">
	  		 <thead className="thead-inverse">
	    		<tr>
	      			<th>#</th>
	      			<th>Time</th>
	      			<th>Item</th>
	      			<th>Amount</th>
	      			<th></th>
	    		</tr>
	  		</thead>
	  		 <tbody>
  				{todoNode}
  			</tbody>
  		</table>
  	</div>
  	);
}

export default TodoList;