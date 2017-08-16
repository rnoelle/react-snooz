import React from 'react';

function Notification( { toDo, snooze, finish } ) {
  return (
    <div className="notification-backdrop">
      <div>
        <h1>{toDo.text}</h1>
        <h3>You've snoozed this task
          <span className="text-em-orange">{toDo.snoozes.length}</span>
        times.</h3>
        <div className="notification-buttons">
          <button>Snooz</button>
          <button>Doing it Now</button>
        </div>
      </div>
    </div>
  )
}
