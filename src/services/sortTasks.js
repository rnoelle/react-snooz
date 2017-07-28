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
        return cat.name === el.category
      })[0];
      if (category) {
        category.numTasks++
      }

  })

  console.log('created categories', categories);

  return categories;

}
