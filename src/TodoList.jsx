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
  let total = 0;
  const todoNode = todos.map((todo,index) => {
    total  = total + parseFloat(todo.amount);
    return (<Todo todo={todo} key={index} index={index} remove={remove}/>);
  });


  const tableTitle = () => {
    return (
         <thead className="thead-inverse">
          <tr>
              <th>#</th>
              <th>时间</th>
              <th>花销项目</th>
              <th>金额</th>
              <th></th>
          </tr>
        </thead>
      );
  };
  
  const tableTotal = (val) => {
    return (
       <tr>
           <th scope="row" colSpan="2"></th>
           <td>总额: </td>
           <td>{val}</td>
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
          {tableTotal(total)}
  			 </tbody>
  		</table>
  	</div>
  	);
}

export default TodoList;