const mongoose = require('mongoose')
    , ToDo = require('../models/ToDo')
    , User = require('../models/User')

module.exports = {

  addToDo(req, res) {
    req.body.date_created = new Date;
    req.body.snoozes = [];
    req.body._user = req.user._id;
    console.log(req.body);
    new ToDo(req.body).save((err, ToDo) => {
      if (err) {console.log(err);return res.status(500).send(err);}
      res.status(200).send(ToDo);
    })
  }

}
