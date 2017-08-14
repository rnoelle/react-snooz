const CronJob = require('cron').CronJob
    , ToDo = require('../models/ToDo')
    ;

module.exports = {
  checkTasksOnInterval( socket ) {
    var user = socket.request.user;
    console.log(socket.request);
    var job = new CronJob('15 * * * * *', () => {
      ToDo.find({
        _user: user._id,
        finished: null,
        notify: {$lt: new Date().now()}
      }).exec((err, todos) => {
        todos.map(todo => {
          socket.emit('notification', todo);
        })
      })
    })

  findNewNotifyTime( toDo, req ) {
    //default is 4 hours for first snooze
    if (toDo.snoozes.length < 2) return new Date().now() + 14400000;
    // 1 hour after 5 snoozes
    if (toDo.snoozes.length > 5) return new Date().now() + 1700000;
    // 5 minutes after 10
    if (toDo.snoozes.length > 10) return new Date().now() + 300000;

    var localDictionary = Object.assign({}, dictionary);
    ToDo.find({_user: req.user._id,
              finished: {$ne: null,
                        $gt: new Date().now() - 3600000 * 24 * 60}}) //find only those finished in the last 60 days
        .exec((err, toDos) => {
          if (toDos.length === 0) return new Date().now() + 14400000;

          toDos.forEach(toDo => {
            var day = Date.getDay(toDo.finished);
            var hour = Date.getHour(toDo.finished)
            localDictionary[day]
          })
        })

  }
}


const dictionary = {
  sunday: {
    '5to8': 0,
    '8to10': 0,
    '10to12': 0,
    '12to14': 0,
    '14to17': 0,
    '17to20': 0,
    '20to5': 0
  },
  monday: {
    '5to8': 0,
    '8to10': 0,
    '10to12': 0,
    '12to14': 0,
    '14to17': 0,
    '17to20': 0,
    '20to5': 0
  },
  tuesday: {
    '5to8': 0,
    '8to10': 0,
    '10to12': 0,
    '12to14': 0,
    '14to17': 0,
    '17to20': 0,
    '20to5': 0
  },
  wednesday: {
    '5to8': 0,
    '8to10': 0,
    '10to12': 0,
    '12to14': 0,
    '14to17': 0,
    '17to20': 0,
    '20to5': 0
  },
  thursday: {
    '5to8': 0,
    '8to10': 0,
    '10to12': 0,
    '12to14': 0,
    '14to17': 0,
    '17to20': 0,
    '20to5': 0
  },
  friday: {
    '5to8': 0,
    '8to10': 0,
    '10to12': 0,
    '12to14': 0,
    '14to17': 0,
    '17to20': 0,
    '20to5': 0
  },
  saturday: {
    '5to8': 0,
    '8to10': 0,
    '10to12': 0,
    '12to14': 0,
    '14to17': 0,
    '17to20': 0,
    '20to5': 0
  }
}
