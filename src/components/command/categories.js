import React, { Component } from 'react';

import Category from '../pres/category';

import { postCategory, editCategory, deleteCategory } from '../../services/categoriesApi';
require('../../styles/notification.css')


class Categories extends Component {
  constructor() {
    super();
    this.state = {
      addingCategory: false,
      userInput: '',
      editingCategory: null,
      deletingCategory: null
    }

    this.toggleAdding = this.toggleAdding.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.toggleDeleting = this.toggleDeleting.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  toggleAdding() {
    this.setState({
      addingCategory: !this.state.addingCategory
    })
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  addCategory(e) {
    e.preventDefault();

    postCategory(this.state.userInput);
    this.setState({
      addingCategory: false,
      userInput: ''
    })
  }


  toggleEditing(id) {
    if (this.state.editingCategory) {
      this.setState({
        editingCategory: null
      })
      return;
    }
    this.setState({
      editingCategory: id,
      menuOpen: null,

    })
  }

  toggleDeleting(id) {
    this.setState({
      deletingCategory: id,
      menuOpen: null
    })
  }

  editCategory(e) {
    e.preventDefault();

    var category = this.props.categories.filter(el => {
      return el.id === this.state.editingCategory;
    })[0];
    editCategory(category.name, this.state.userInput)
  }

  deleteCategory() {
    deleteCategory(this.state.deletingCategory);
  }

  render() {
    var { selected, categories, selectCategory } = this.props;
    console.log(categories, 'categories');
    if (categories) {
      var list = categories.map((el, i) => {
        el.name = el.name || '';
        return (
          <Category key={i}
            category={el}
            selected={selected}
            selectCategory={selectCategory}
            openMenu={this.openMenu}
            toggleEditing={this.toggleEditing}
            toggleDeleting={this.toggleDeleting}
            handleChange={this.handleChange}
            userInput={this.state.userInput}
            handleSubmit={this.editCategory}
            editing={el.id === this.state.editingCategory ? true : false}
        )
      })
    }

    return (
      <aside className="categories">
        <h3>Categories</h3>
        <ul>
          <li className={`${selected === 'all'
            ? 'active'
            : ''}`} onClick={() => selectCategory('all')}>
            All</li>
          {list || ''}
        </ul>
        <br/>
          {
            //add Category input
            !this.state.addingCategory ?
            (
              <a onClick={this.toggleAdding}><i className="fa fa-plus-circle"></i>
              Add a category</a>
            )
            :
            (
              <form className="add-category" onSubmit={e => this.addCategory(e)}>
                <input type="text"
                      placeholder="New Category"
                      onChange={this.handleChange}
                      value={this.state.userInput}/>

                <div>
                  <input type="submit" value="Add" />
                  <button onClick={this.toggleAdding}>Cancel</button>
                </div>
              </form>
            )
          }

          { //delete modal
            this.state.deletingCategory ?
            (
              <div className="notification-backdrop">
                <div>
                  <h3>Are you sure you want to delete this category?</h3>
                  <div className="notification-buttons">
                    <button className="">Delete</button>
                    <button className="button-green">Cancel</button>
                  </div>
                </div>
              </div>
            ) :
            ''
        }
      </aside>
    )
  }
}

export default Categories;
