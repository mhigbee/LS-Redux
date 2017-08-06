import React, { Component } from 'react';
import {connect} from 'react-redux';

class ListTodo extends Component {
  createListItems() {
    return this.props.todos.map((todo, i) => {
      return (
        <li key={i}>{todo.value}</li>
      )
    });
  }
  render () {
    return (
          <ul>
              {this.createListItems()}
          </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.addtodoReducer
  };
}

export default connect(mapStateToProps)(ListTodo);
