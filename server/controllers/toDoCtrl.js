const mongoose = require('mongoose')
    , ToDo = require('../models/ToDo')
    , User = require('../models/User')
    , notifications = require('./notifications')
    ;

module.exports = {

  getToDos(req, res) {
    ToDo.find({_user: req.user._id}).exec((err, toDos) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(toDos);
    })
  },

  addToDo(req, res) {
    req.body.date_created = new Date;
    req.body.snoozes = [];
    req.body.notify = new Date(Date.now() + 7200000); //default is 2 hours
    req.body._user = req.user._id;
    req.body.finished = null;
    console.log(req.body);
    new ToDo(req.body).save((err, ToDo) => {
      if (err) {console.log(err);return res.status(500).send(err);}
      res.status(200).send(ToDo);
    })
  },

  editToDo(req, res) {
      ToDo.findOne({_id: req.params.id}, (err, toDo) => {
        if (err) return res.status(500).send(err);
        if (req.body.started) {
          toDo.set({
            started: new Date(),
            notify: new Date(Date.now() + 7200000) //wait 2 hours before notififying again
          });
          toDo.save();
          res.status(200).send();
        } else {
          toDo.set(req.body);
          toDo.save();
          res.status(200).send();
        }
      })
  },

  snoozeToDo(req, res) {
    ToDo.findOne({_id: req.params.id}, (err, toDo) => {
      if (err) return res.status(500).send(err);
      var newNotifyTime = notifications.findNewNotifyTime(toDo, req);
      toDo.set({notify: newNotifyTime,
                $push: {
                  snoozes: new Date()
                }});
      toDo.save();
      res.status(200).send(toDo);
    })
  },

  addCategory(req, res) {
    User.findOneAndUpdate({_id: req.user._id}, {$push: {groups: req.body.category}}, (err, user) => {
      console.log('user', user);
      console.log('error', err);
      if (err) return res.status(500).send(err);
      res.status(200).send();
    })
  },

  finishToDo(req, res) {
    console.log('finishing', req.body, req.params);
    ToDo.findByIdAndUpdate(req.params.id, {finished: new Date()}, (err, toDo) => {
      if (err) return res.status(500).send(err);
      res.status(200).send();
    })
  }

}
