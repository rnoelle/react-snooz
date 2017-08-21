import React, { Component } from 'react';

import { postCategory } from '../../services/categoriesApi';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      addingCategory: false,
      userInput: ''
    }

    this.toggleAdding = this.toggleAdding.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    var { selected, categories, selectCategory } = this.props;
    if (categories) {
      var list = categories.map((el, i) => {
        el.name = el.name || '';
        return (
          <li className={`${selected === el.name
            ? 'active'
            : ''}`} key={i} onClick={() => selectCategory(el.name)}>
            {`${el.name[0].toUpperCase()}${el.name.slice(1)} ${el.numTasks
              ? '(' + el.numTasks + ')'
              : ''}`}
          </li>
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
          {list}
        </ul>
        <br/>
          {
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

      </aside>
    )
  }
}

export default Categories;
