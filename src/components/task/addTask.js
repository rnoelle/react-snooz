import React, { Component } from 'react';

import { postTask } from '../../services/taskApi';

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

  handleClick(e) {
    e.preventDefault();
    let newTask = {
      text: this.state.textInput
    }
    postTask(newTask);
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.textInput} onChange={e => this.handleChange(e)}/>
        <input type="submit" value="Add" onClick={e => this.handleClick(e)}/>
      </form>
    )
  }
}
