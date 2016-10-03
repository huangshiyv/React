import React from 'react';

const TodoForm = ({addTodo,date}) => {
  // Input Tracker
  let input;
  // Return JSX
  const onSubmit =(e) =>
  {
    e.preventDefault();
    addTodo(input.value);
    input.value = '';
  };

  return (
   <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="date">时间</label>
        <input type="date" className="form-control" id="date" defaultValue={date} placeholder="date" />
      </div>
      <div className="form-group">
        <label htmlFor="detail">花销项目</label>
        <input type="text" className="form-control" id="detail" placeholder="Detail" ref={node => {
        input = node;
      }}/>

      </div>
      <div className="form-group">
        <label htmlFor="amount">金额</label>
        <input type="number" className="form-control" id="amount" step="0.01" placeholder="amount" />
      </div>
      <div className="form-group">
        <label htmlFor="description">描述信息</label>
        <textarea className="form-control" id="description" placeholder="Detail"  rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
};

export default TodoForm;