import React, { Component } from 'react';

import AddTask from '../task/addTask';
import TaskList from '../task/taskList';

require('../../styles/dashboard.css');

export default class Dashboard extends Component {

  render() {
    return (
      <main className={'dashboard'}>
        <h3>Add a Task</h3>
        <AddTask/>
        <TaskList/>
      </main>
    )
  }
}
