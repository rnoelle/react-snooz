import React, { Component } from 'react';

class Task extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    }
    this.openEditing = this.openEditing.bind(this);
  }

  openEditing(e) {

  }

  render() {
    var {
      id,
      text
    } = this.props.task;

    return (
      <li key={id}>{text}<i className="fa fa-pencil"></i></li>
    )
  }
}

export default Task;
