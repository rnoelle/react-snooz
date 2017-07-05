import React from 'react';

export default function TaskList({tasks}) {

    if (tasks) {
       tasks = tasks.map(el => {
        return (
          <li key={el.id}>el.text</li>
        )
      })
    }
    return (
      <ul>
        { tasks }
      </ul>
    )
}
