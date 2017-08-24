import React, { Component } from 'react';

function Category({selected, selectCategory, category, menuOpen, openMenu, editing, toggleEditing, toggleDeleting, handleChange, userInput, handleSubmit}) {
  var label = `${category.name[0].toUpperCase()}${category.name.slice(1)} ${category.numTasks
    ? `(${category.numTasks})`
    : ''}`

  return (
    <li className={`${selected === category.name
      ? 'active'
      : ''}`} key={category.id} >
      { !editing ?
        <span onClick={() => selectCategory(category.name)}>{label}</span> :
        <form onSubmit={handleSubmit}>
          <input placeholder="Category Name" value={userInput} defaultValue={category.name} onChange={handleChange}/>
          <button className="button-green" onClick={handleSubmit}>Save</button>
          <button onClick={toggleEditing}>Cancel</button>
        </form>
      }
        <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={() => openMenu(category.id)}>
          { 
            menuOpen ?
            <ul>
              <li onClick={toggleEditing}>Edit Category</li>
              <li onClick={toggleDeleting}>Delete Category</li>
            </ul> :
            ''
          }
        </i>
    </li>
  )
}

export default Category;
