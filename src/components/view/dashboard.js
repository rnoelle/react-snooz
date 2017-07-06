import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTask from '../task/addTask';
import TaskList from '../task/taskList';

import { getTasks } from '../../services/taskApi';

require('../../styles/dashboard.css');

class Dashboard extends Component {

  componentDidMount() {
    getTasks();
  }

  render() {
    var { tasks } = this.props;
    return (
      <main className={'dashboard'}>
        <h3>Add a Task</h3>
        <AddTask/>
        <TaskList tasks={ tasks }/>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(Dashboard);
