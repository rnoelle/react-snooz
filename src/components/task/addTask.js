import React, { Component } from 'react';

import { postTask, getTasks } from '../../services/taskApi';

export default class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      textInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      textInput: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      user_id: 23,
      text: this.state.textInput
    }
    postTask(newTask);
    getTasks()
    this.setState({
      textInput: ''
    })
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" value={this.state.textInput} onChange={e => this.handleChange(e)}/>
        <input type="submit" value="Add" />
      </form>
    )
  }
}
