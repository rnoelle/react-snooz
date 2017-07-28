import React from 'react';

function Categories({ selected, categories, selectCategory }) {
  if (categories) {
    var list = categories.map((el, i) => {
      return (
        <li className={`${selected === el.name ? 'active' : ''}`}
            key={i}
            onClick={() => selectCategory(el.name)}>
            {`${el.name[0].toUpperCase()}${el.name.slice(1)} ${el.numTasks ? '('+ el.numTasks +')' : '' }`}
        </li>
      )
    })
  }

  return (
    <aside className="categories">
      <h3>Categories</h3>
      <ul>
        <li className={`${selected === 'all' ? 'active' : ''}`}
          onClick={() => selectCategory('all')}>
          All</li>
        {list}
      </ul>
    </aside>
  )
}

export default Categories;
