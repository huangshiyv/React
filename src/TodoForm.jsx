import React from 'react';

const TodoForm = ({addTodo,date}) => {
  // Input Tracker
  let dateInput;
  let itemInput;
  let amountInput;
  let descriptionInput;
  // Return JSX
  const onSubmit =(e) =>
  {
    e.preventDefault();
    const inputValue ={
      time: dateInput.value,
      item: itemInput.value,
      amount:amountInput.value,
      description:descriptionInput.value
    };
    addTodo(inputValue);
    itemInput.value = '';
  };

  return (
   <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="date">时间</label>
        <input type="date" className="form-control" id="date" defaultValue={date} placeholder="date" ref={node => {
        dateInput = node;
      }}/>
      </div>
      <div className="form-group">
        <label htmlFor="detail">花销项目</label>
        <input type="text" className="form-control" id="detail" placeholder="Detail" ref={node => {
        itemInput = node;
      }}/>
      </div>
      <div className="form-group">
        <label htmlFor="amount">金额</label>
        <input type="number" className="form-control" id="amount" step="0.01" placeholder="amount" ref={node => {
        amountInput = node;
      }}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">描述信息</label>
        <textarea className="form-control" id="description" placeholder="Detail"  rows="3" ref={node => {
        descriptionInput = node;
      }}/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
};

export default TodoForm;