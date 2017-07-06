import React from 'react';

function TaskList({tasks}) {

    if (tasks) {
       tasks = tasks.map(el => {
        return (
          <li key={el.id}>{el.text}</li>
        )
      })
    }
    return (
      <ul>
        { tasks }
      </ul>
    )
}

export default TaskList;
