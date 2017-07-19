import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTask from '../task/addTask';
import TaskList from '../task/taskList';
import Categories from '../command/categories';

import { getTasks } from '../../services/taskApi';

require('../../styles/dashboard.css');

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all'
    }
    this.selectCategory = this.selectCategory.bind(this);
  }

  componentDidMount() {
    getTasks();
  }

  selectCategory(category) {
    this.setState({
      category: category
    })
  }

  render() {
    var { tasks } = this.props;
    if (this.state.category !== 'all') {
      tasks = tasks.filter(el => {
        return el.category === this.state.category;
      })
    }

    return (
      <main className={'dashboard'}>
        <Categories selected={this.state.category}
          categories={this.props.categories}
          selectCategory={this.selectCategory}/>
          
        <h3>Add a Task</h3>
        <AddTask category={ this.state.category }/>
        <TaskList tasks={ tasks }/>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    categories: ['work', 'house', 'writing']
  }
}

export default connect(mapStateToProps)(Dashboard);
