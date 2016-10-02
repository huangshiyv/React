import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import firebase from 'firebase';
import Reactfire from 'reactfire';
import reactMixin from 'react-mixin'

const firebaseConfig = {
    apiKey: "AIzaSyCh3lKSmu1i9F_VZ6pDh1a-k8AztpqvdQs",
    authDomain: "firstapp-52d6b.firebaseapp.com",
    databaseURL: "https://firstapp-52d6b.firebaseio.com",
    storageBucket: "firstapp-52d6b.appspot.com",
    messagingSenderId: "147703247224"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }

  // Lifecycle method
  componentWillMount(){
    const firebaseRef = firebase.database().ref('Pighouse/data');
    this.bindAsArray(firebaseRef.limitToLast(25), 'data');
  }

  // Add todo handler
  addTodo(val){
    this.firebaseRefs['data'].push({
        text: val
      });
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    var firebaseRef = firebase.database().ref('Pighouse/data');
    firebaseRef.child(id).remove();
    
  }

  render(){
    // Render JSX
    return (
      <div>
        <Title todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}
reactMixin(TodoApp.prototype, Reactfire);
render(<TodoApp />, document.getElementById('container'));
