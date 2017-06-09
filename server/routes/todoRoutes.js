const toDoCtrl = require('../controllers/toDoCtrl');

module.exports = app => {

  app.post('/api/todos', toDoCtrl.addToDo);

}
