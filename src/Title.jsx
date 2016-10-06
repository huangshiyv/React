import React from 'react';
import TodoForm from './TodoForm';
import Modal from './Modal';

const Title = ({todoCount,addTodo, date}) => {
	const showForm = ({addTodo,date}) => {
		  return (<TodoForm addTodo={addTodo} date={date} />);
		
	};

	const test = () => {
 			return (<h1>huang</h1>);
	};

  return (
    <div>
       <div>
          <h1>to-do ({todoCount})</h1>
          <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
  					<span className="glyphicon glyphicon glyphicon-plus"></span> 
					</button>
        	<Modal content ={showForm({addTodo,date})} />
       </div>
    </div>
  );
}

export default Title;