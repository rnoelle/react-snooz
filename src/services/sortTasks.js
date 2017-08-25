export function createCategories(categoriesList, tasks) {
  if (categoriesList.length === 0) {
    return [];
  }

  var categories = [];
  var id = 1;

  categoriesList.forEach(el => {
    categories.push({
      id: id,
      name: el,
      numTasks: 0
    })
    id++;
  });
  tasks.forEach(el => {
      var category = categories.filter(cat => {
        return cat === el.category
      })[0];
      if (category) {
        category.numTasks++
      }

  })

  return categories;

}


export function numFinishedTasks(tasks) {
  var finishedTasks = 0;
  tasks.forEach(el => {
    if (el.finished) {
      finishedTasks++;
    }
  })
  return finishedTasks;
}

export function sortUnfinishedTasks(tasks) {
  return tasks.filter(task => {
    return !task.finished;
  })
}

export function numSnoozes(tasks) {
  var snoozes = 0;
  tasks.forEach(el => {
    snoozes += el.snoozes.length;
  });
  return snoozes;
}

export function numSnoozesAndFinishedTasks(tasks) {
  var finishedTasks = 0
    , snoozes = 0
    ;

    tasks.forEach(el => {
      snoozes += el.snoozes.length;
      if (el.finished) {
        finishedTasks++
      }
    })

    return [snoozes, finishedTasks];
}

export function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' '); 
}
