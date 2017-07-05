import React, { Component } from 'react';

import AddTask from '../task/addTask';

require('../../styles/dashboard.css');

export default class Dashboard extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <main>
        <h3>Add a Task</h3>
        <AddTask/>
      </main>
    )
  }
}
