export function createCategories(categoriesList, tasks) {
  var categories = [];

  if (categoriesList.length === 0) {
    return [];
  }

  categoriesList.forEach(el => {
    categories.push({
      name: el,
      numTasks: 0
    })
  })
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
