const toDoCtrl = require('../controllers/toDoCtrl');

module.exports = app => {

  //Get
  app.get('/api/tasks', toDoCtrl.getToDos);
  //Post
  app.post('/api/tasks', toDoCtrl.addToDo);
  app.post('/api/snooze/:id', toDoCtrl.snoozeToDo);
  app.post('/api/categories', toDoCtrl.addCategory);
  //Patch
  app.patch('/api/tasks/:id', toDoCtrl.editToDo);
  //Put
  app.put('/api/categories', toDoCtrl.editCategory);
  //Delete
  app.delete('/api/tasks/:id', toDoCtrl.finishToDo);
  app.delete('/api/categories/:category', toDoCtrl.deleteCategory);

}
