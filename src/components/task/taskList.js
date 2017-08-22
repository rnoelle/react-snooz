import React, { Component } from 'react';
import Task from './task';

import { removeTask } from '../../services/taskApi';

class TaskList extends Component {
    constructor() {
      super();
      this.state = {
        currentPage: 1,
        tasksPerPage: 10
      }

      this.removeTaskFromList = this.removeTaskFromList.bind(this);
    }

    removeTaskFromList(id) {
      removeTask(id);
    }

    render() {
      var {tasks} = this.props,
          lastToDo = this.state.currentPage * this.state.tasksPerPage,
          firstToDo = lastToDo - this.state.tasksPerPage;

        tasks = tasks.slice(firstToDo, lastToDo);
         tasks = tasks.map(el => {
          return (
            <Task key={el.id} task={el} removeTask={this.removeTaskFromList}/>
          )
        })

      var pageNumbers = [];
      for (let i = 1; i <= Math.ceil(tasks.length / this.state.tasksPerPage); i++) {
        pageNumbers.push(i);
      }
      pageNumbers = pageNumbers.map(num => (
        <li
          key={num}
          id={num}
          onClick={this.handlePageChange}
          > {num}
        </li>
      ))
      return (
        <div className="taskList">
          <ul className="todoList">
            { tasks }
          </ul>
          <ul className="todoList-page-numbers">
            { pageNumbers }
          </ul>
      </div>
    )}
}

export default TaskList;
