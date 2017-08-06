import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodoAction} from '../actions/addToDo.js';

class AddTodo extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodoAction(event.target.firstChild.value);
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Add a Todo" id="textField" />
          <button type="submit">
          Add Todo</button>
        </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodoAction: addTodoAction}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
