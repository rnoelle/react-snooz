import React from 'react';
import Task from './task';

function TaskList({tasks}) {

    if (tasks) {
       tasks = tasks.map(el => {
        return (
          <Task key={el.id} task={el}/>
        )
      })
    }
    return (
      <ul className="todoList">
        { tasks }
      </ul>
    )
}

export default TaskList;
