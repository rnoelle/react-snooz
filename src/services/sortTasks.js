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
    if (el.completed) {
      finishedTasks++;
    }
  })
  return finishedTasks;
}
