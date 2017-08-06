import React, { Component } from 'react';
import './App.css';
import ListTodo from '../containers/ListTodo';
import AddTodo from '../containers/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To-Dos:</h2>
        </div>
          <AddTodo />
          <ListTodo />
      </div>
    );
  }
}

export default App;
