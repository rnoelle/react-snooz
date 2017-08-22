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
      this.handlePageChange = this.handlePageChange.bind(this);
    }

    removeTaskFromList(id) {
      removeTask(id);
    }

    handlePageChange(page) {
      switch (page) {
        case '-':
          this.setState({
            currentPage: this.state.currentPage - 1
          })
          break;
        case '+':
          this.setState({
            currentPage: this.state.currentPage + 1
          })
          break;
        default:
          this.setState({
            currentPage: page
          })
      }
    }

    render() {
      var {tasks} = this.props,
          lastToDo = this.state.currentPage * this.state.tasksPerPage,
          firstToDo = lastToDo - this.state.tasksPerPage,
          totalTasks = tasks.length,
          totalPages = Math.ceil(totalTasks/this.state.tasksPerPage);

        tasks = tasks.slice(firstToDo, lastToDo);
         tasks = tasks.map(el => {
          return (
            <Task key={el.id} task={el} removeTask={this.removeTaskFromList}/>
          )
        })

      var pageNumbers = [];

      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      pageNumbers = pageNumbers.map(num => (
        <li
          key={num}
          id={num}
          className={num === this.state.currentPage ? "active" : ''}
          onClick={() => this.handlePageChange(num)}
          > {num}
        </li>
      ))
      return (
        <div className="taskList">
          <ul className="todoList">
            { tasks }
          </ul>
          <ul className="todoList-page-numbers">
            {
              this.state.currentPage > 1 ?
              (<li key="-" id="-"
                    onClick={() => this.handlePageChange('-')}> Prev </li>)
              :
              (<li key="-" id="-" className="disabledPage"> Prev </li>)
            }

            { pageNumbers }
            {
              this.state.currentPage < totalPages ?
              (<li key="+" id="+"
                  onClick={() => this.handlePageChange('+')}> Next </li>)
              :
              (<li key="+" id="+" className="disabledPage">Next</li>)
            }
          </ul>
      </div>
    )}
}

export default TaskList;
