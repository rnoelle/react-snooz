import React, { Component } from 'react';

import { postTask } from '../../services/taskApi';

export default class AddTodo extends Component {
  constructor() {
    super()
    this.state = {
      textInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      textInput: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      text: this.state.textInput,
      category: this.props.category
    }
    postTask(newTask);
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
