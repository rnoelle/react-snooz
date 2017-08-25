import React from 'react';
require('../../styles/notification.css')

function Notification( { toDo, snooze, start, clearNotifications } ) {

  return (
    <div className="notification-backdrop" onClick={clearNotifications}>
      <div>
        <h1>{toDo.text}</h1>
        <h3>You've snoozed this task
          <span className="text-em-orange"> {toDo.snoozes.length} </span>
         times.</h3>
        <div className="notification-buttons">
          <button onClick={() => snooze(toDo)}>Snooz</button>
          <button className="button-green" onClick={() => start(toDo)}>Doing it Now</button>
        </div>
      </div>
    </div>
  )
}

export default Notification;
