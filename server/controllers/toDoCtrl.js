const mongoose = require('mongoose')
    , ToDo = require('../models/ToDo')
    , User = require('../models/User')
    , notifications = require('./notifications')
    ;

module.exports = {

  addToDo(req, res) {
    req.body.date_created = new Date;
    req.body.snoozes = [];
    req.body.notify = new Date().now() + 7200000; //default is 2 hours
    req.body._user = req.user._id;
    req.body.finished = null;
    console.log(req.body);
    new ToDo(req.body).save((err, ToDo) => {
      if (err) {console.log(err);return res.status(500).send(err);}
      res.status(200).send(ToDo);
    })
  }

  snoozeToDo(req, res) {
    var newNotifyTime = notifications.findNewNotifyTime(toDo, req);
    ToDo.findByIdAndUpdate(req.params.id, {notify: newNotifyTime}, (err, toDo) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(toDo);
    })
  }

}
