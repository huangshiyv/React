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
      <div className="form-group form-group-lg">
         <label htmlFor="date">时间</label>
         <div className="input-group ">
          <span className="input-group-addon">
           <span className="glyphicon glyphicon-time" ></span>
           </span>
          <input type="date" className="form-control" id="date" defaultValue={date} placeholder="date" ref={node => {
          dateInput = node;
        }}/>
      </div>

      </div>
      <div className="form-group form-group-lg">
        <label htmlFor="detail">花销项目</label>
          <div className="input-group">
        <span className="input-group-addon">
          <span className="glyphicon glyphicon-piggy-bank"></span>
          </span>
        <input type="text" className="form-control" id="detail" placeholder="Detail" ref={node => {
        itemInput = node;
      }}/>
       </div>
      </div>
      
      <div className="form-group form-group-lg">
        <label htmlFor="amount">金额</label>
         <div className="input-group">
         <span className="input-group-addon">
          <span className="glyphicon glyphicon-euro"></span>
          </span>
          <input type="number" className="form-control" id="amount" step="0.01" placeholder="amount" ref={node => {
          amountInput = node;
        }}/>
       </div>
      </div>
      <div className="form-group form-group-lg">
        <label htmlFor="description">描述信息</label>
        <textarea className="form-control" id="description" placeholder="Detail"  rows="3" ref={node => {
        descriptionInput = node;
      }}/>
      </div>
      <button type="submit" className="btn btn-primary">提交</button>
    </form>
  );
};

export default TodoForm;