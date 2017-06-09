const mongoose = require('mongoose')
    , ToDo = require('../models/ToDo')
    , User = require('../models/User')

module.exports = {

  addToDo(req, res) {
    new ToDo(req.body).save((err, ToDo) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(ToDo);
    })
  }

}
