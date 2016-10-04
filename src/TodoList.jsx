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
      	  <button
            className="glyphicon glyphicon-remove" style={{color: 'rgb(222,79,79)', border: 'none', background:'none'}}
            onClick={() => {remove(index)}}
          />
     </td>
    </tr>
  	);
  //return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}


const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo,index) => {
    return (<Todo todo={todo} key={index} index={index} remove={remove}/>);
  });

  const tableTitle = () => {
    return (
         <thead className="thead-inverse">
          <tr>
              <th>#</th>
              <th>Time</th>
              <th>Item</th>
              <th>Amount</th>
              <th></th>
          </tr>
        </thead>
      );
  };
  
  const tableTotal = () => {
    return (
       <tr>
           <th scope="row" colSpan="2"></th>
           <td>Total: </td>
           <td></td>
           <td></td>
           </tr>
      );
  };

  return (
  	<div className="list-group" style={{marginTop:'30px'}}>
  		<table className="table">
	  	   {tableTitle()}
	  		 <tbody>
  				{todoNode}
          {tableTotal()}
  			 </tbody>
  		</table>
  	</div>
  	);
}

export default TodoList;