const CronJob = require('cron').CronJob,
  ToDo = require('../models/ToDo'),
  dictionary = require('./dictionary');

module.exports = {
  checkTasksOnInterval(socket) {
    var user = socket.request.user;
    console.log(socket.request);
    var job = new CronJob('15 * * * * *', () => {
      ToDo.find({
        _user: user._id,
        finished: null,
        notify: {
          $lt: new Date().now()
        }
      }).exec((err, todos) => {
        todos.map(todo => {
          socket.emit('notification', todo);
        })
      })
    })

    findNewNotifyTime(toDo, req) {
      //default is 4 hours for first snooze
      if (toDo.snoozes.length < 2)
        return new Date(Date.now() + 14400000);

      // 1 hour after 5 snoozes
      if (toDo.snoozes.length > 5)
        return new Date(Date.now() + 1700000);

      // 5 minutes after 10
      if (toDo.snoozes.length > 10)
        return new Date(Date.now() + 300000);

      var localDictionary = Object.assign({}, dictionary);
      ToDo.find({
        _user: req.user._id,
        finished: {
          $ne: null,
          $gt: new Date(Date.now() - 3600000 * 24 * 60)
        }
      }). //find only those finished in the last 60 days
      exec((err, toDos) => {
        if (toDos.length === 0)
          return new Date(Date.now() + 14400000);

        toDos.forEach(toDo => {
          var day = toDo.finished.getDay();
          var today = new Date().getDay();
          var diff = day - today;
          if (diff > 2 && diff < 5 || diff > -5 && diff < -2)
            return; //only days close

          var hour = toDo.finished.getHours();
          localDictionary[day][sortHour(hour)] += 5;
          toDo.snoozes.forEach(snooze => {
            var day = Date.getDay(snooze);
            var hour = Date.getHours(snooze);
            localDictionary[day][hour]--;
          })
        })
        var optimalTimeScore = 0;,
        optimalTime;
        for (var i = 0; i < 6; i++) {
          var chosenDay = (today + i) % 7;
          var bonus;
          switch (i) {
            case 0:
              bonus = 50;
              break;
            case 1:
              bonus = 50;
              break;
            case 2:
              bonus = 25;
              break;
            case 3:
              bonus = 20;
              break;
            default:
              bonus = 0;
          }

          for (let prop in localDictionary[chosenDay]) {
            localDictionary[chosenDay][prop] += bonus;
            if (localDictionary[chosenDay][prop] > optimalTimeScore) {
              optimalTimeScore = localDictionary[chosenDay][prop];
              optimalTime = [chosenDay, prop];
            }
          }
        }

        return this.giveHour(optimalTime);

      })
    }, //end findNewNotifyTime
    giveHour(optimalTime) {
      var hour = Number(optimalTime[1].split('t')[0]);
      var d = new Date();
      d.setDate(d.getDate() + ((7-d.getDay())%7+optimalTime[0]) % 7);
      d.setHour(optimalTime[1]);
      return d;
    }

  } //end module exports


  function sortHour(hour) {
    if (hour >= 5 && hour < 8)
      return '5to8';
    if (hour >= 8 && hour < 10)
      return '8to10';
    if (hour >= 10 && hour < 12)
      return '10to12';
    if (hour >= 12 && hour < 14)
      return '12to14';
    if (hour >= 14 && hour < 17)
      return '14to17';
    if (hour >= 17 && hour < 20)
      return '17to20';
    if (hour >= 20 || hour < 5)
      return '17to20';
    }

  const dictionary = {
    0: {
      '5to8': 0,
      '8to10': 0,
      '10to12': 0,
      '12to14': 0,
      '14to17': 0,
      '17to20': 0,
      '20to5': 0
    },
    1: {
      '5to8': 0,
      '8to10': 0,
      '10to12': 0,
      '12to14': 0,
      '14to17': 0,
      '17to20': 0,
      '20to5': 0
    },
    2: {
      '5to8': 0,
      '8to10': 0,
      '10to12': 0,
      '12to14': 0,
      '14to17': 0,
      '17to20': 0,
      '20to5': 0
    },
    3: {
      '5to8': 0,
      '8to10': 0,
      '10to12': 0,
      '12to14': 0,
      '14to17': 0,
      '17to20': 0,
      '20to5': 0
    },
    4: {
      '5to8': 0,
      '8to10': 0,
      '10to12': 0,
      '12to14': 0,
      '14to17': 0,
      '17to20': 0,
      '20to5': 0
    },
    5: {
      '5to8': 0,
      '8to10': 0,
      '10to12': 0,
      '12to14': 0,
      '14to17': 0,
      '17to20': 0,
      '20to5': 0
    },
    6: {
      '5to8': 0,
      '8to10': 0,
      '10to12': 0,
      '12to14': 0,
      '14to17': 0,
      '17to20': 0,
      '20to5': 0
    }
  }
