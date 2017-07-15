import React, { Component } from 'react';

import { removeTask } from '../../services/taskApi';

class Task extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    }
    this.openEditing = this.openEditing.bind(this);
  }

  openEditing() {
    console.log('open!');
    this.setState({
      editing: true
    })
  }

  render() {
    var {
      id,
      text
    } = this.props.task;

    return (
      <li><span onClick={() => removeTask(id)}>{text}</span><i className="fa fa-pencil" onClick={this.openEditing}></i></li>
    )
  }
}

export default Task;
