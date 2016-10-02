import React from 'react';

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
   <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input type="date" className="form-control" id="date" placeholder="date" />
      </div>
      <div className="form-group">
        <label htmlFor="detail">Detail</label>
        <input type="text" className="form-control" id="detail" placeholder="Detail" ref={node => {
        input = node;
      }}/>

      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input type="number" className="form-control" id="amount" step="0.01" placeholder="amount" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" id="description" placeholder="Detail"  rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
};

export default TodoForm;