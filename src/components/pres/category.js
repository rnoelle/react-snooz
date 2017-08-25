import React, { Component } from 'react';

import { titleCase } from '../../services/sortTasks';

function Category({selected, selectCategory, category, menuOpen, openMenu, editing, toggleEditing, toggleDeleting, handleChange, userInput, handleSubmit}) {
  var label = `${titleCase(category.name)} ${category.numTasks
    ? `(${category.numTasks})`
    : ''}`

  return (
    <li className={`${selected === category.name
      ? 'active'
      : ''} category`} key={category.id} >
      { !editing ?
        <span onClick={() => selectCategory(category.name)}>{label}</span> :
        <form onSubmit={handleSubmit}>
          <input placeholder="Category Name" type="text" value={userInput} defaultValue={category.name} onChange={handleChange}/>
          <button className="button-green" onClick={handleSubmit}>Save</button>
          <button onClick={toggleEditing}>Cancel</button>
        </form>
      }
      { editing ? '' :
        <button id="icon-button">
          <i className="fa fa-ellipsis-h" aria-hidden="true">
              <ul className="menu">
                <li onClick={() => toggleEditing(category.id, category.name)}>Edit</li>
                <li onClick={() => toggleDeleting(category.id)}>Delete</li>
              </ul>
          </i>
        </button>
      }
    </li>
  )
}

export default Category;
