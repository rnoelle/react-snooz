import React from 'react';

function Categories({ selected, categories, selectCategory }) {
  console.log(categories);
  if (categories.map) {
    var list = categories.map((el, i) => <li className={`${selected === el ? 'active' : ''}`} key={i} onClick={() => selectCategory(el)}>{el[0].toUpperCase() + el.slice(1)}</li>)
  }

  return (
    <aside className="categories">
      <h3>Categories</h3>
      <ul>
        <li className={`${selected === 'all' ? 'active' : ''}`} onClick={() => selectCategory('all')}>All</li>
        {list}
      </ul>
    </aside>
  )
}

export default Categories;
