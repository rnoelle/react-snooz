import React from 'react';
import Task from './task';

import { removeTask } from '../../services/taskApi';

function TaskList({tasks}) {
    function removeTaskFromList(id) {
      removeTask(id);
    }

    if (tasks) {
       tasks = tasks.map(el => {
        return (
          <Task key={el.id} task={el} removeTask={removeTaskFromList}/>
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
