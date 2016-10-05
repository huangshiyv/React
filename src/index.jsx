import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Title from './Title';
import TodoList from './TodoList';
import Rebase from 're-base';

var base = Rebase.createClass({
    apiKey: "AIzaSyCh3lKSmu1i9F_VZ6pDh1a-k8AztpqvdQs",
    authDomain: "firstapp-52d6b.firebaseapp.com",
    databaseURL: "https://firstapp-52d6b.firebaseio.com",
    storageBucket: "firstapp-52d6b.appspot.com",
    messagingSenderId: "147703247224"
});

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }
  componentDidMount(){
      this.ref = base.syncState('Pighouse/data', {
      context: this,
      state: 'data',
      asArray: true,
      then(){
      }
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  // Add todo handler
  addTodo(val){
    this.state.data.push(val);
    this.setState({
     data: this.state.data
   });
  }
  // Handle remove
  handleRemove(id){
    let newData = this.state.data;
    newData.splice(id,1);
    this.setState({
        data: newData
      })
  }

  render(){
    // Render JSX
    return (
      <div>
      <div className="col-md-4 col-md-offset-4">
        <Title todoCount={this.state.data.length} addTodo={this.addTodo.bind(this)} date={new Date().toDateInputValue()} />
      </div> 
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

render(<TodoApp />, document.getElementById('container'));
