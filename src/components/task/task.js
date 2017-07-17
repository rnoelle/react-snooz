import React, { Component } from 'react';

import { editTask } from '../../services/taskApi';

class Task extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      class: '',
      userInput: ''
    }
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  toggleEditing() {
    this.setState({
      editing: !this.state.editing,
      userInput: this.props.task.text
    })
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      text: this.state.userInput
    }
    this.setState({
      editing: false,
      userInput: ''
    })
    editTask(this.props.task.id, newTask);
  }

  removeTask() {
    this.setState({
      class: 'finished-task'
    })
    setTimeout(() => {
      this.props.removeTask(this.props.task.id);
    }, 500)
  }

  render() {
    var {
      text
    } = this.props.task;
    var icon = this.state.editing ? 'times-circle-o' : 'pencil'

    return (
      <li className={`${this.state.class}`}>
        <span onClick={this.state.editing ? '' : this.removeTask}>
          {!this.state.editing ? text :
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
          </form>
          }
        </span>
        <i className={`fa fa-${icon}`} onClick={this.toggleEditing}></i>
        {
          this.state.editing ?
          ''
          :
          ''
        }
      </li>
    )
  }
}

export default Task;
