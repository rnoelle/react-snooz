const toDoCtrl = require('../controllers/toDoCtrl');

module.exports = app => {

  app.get('/api/tasks', toDoCtrl.getToDos);
  app.post('/api/tasks', toDoCtrl.addToDo);
  app.post('/api/categories', toDoCtrl.addCategory);
  
}
