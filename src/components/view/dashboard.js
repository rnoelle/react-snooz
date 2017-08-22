import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTask from '../task/addTask';
import TaskList from '../task/taskList';
import Categories from '../command/categories';

import { getUser } from '../../services/userApi';
import { getTasks } from '../../services/taskApi';
import { getLocalHour } from '../../services/time';
import { createCategories, sortUnfinishedTasks } from '../../services/sortTasks';

import apiUrl, { authUrl } from '../../services/apiUrl';

require('../../styles/dashboard.css');

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
      greeting: 'Hello, ',
      greetingIcon : '',
      redirect: false
    }
    this.selectCategory = this.selectCategory.bind(this);
  }

  componentWillMount() {
    this.props.auth.isAuthenticated().then(response => {
      if (typeof window !== 'undefined' && !response) {
           window.location.href = `${authUrl}login`;
      }
    })
  }

  componentDidMount() {
    if (!this.props.user.display_name) {
      getUser();
    }
      getTasks();
      var hour = getLocalHour();
      if (hour > 3 && hour < 12) {
        this.setState({
          greeting: 'Good Morning',
          greetingIcon: 'fa-sun-o'
        })
      } else if (hour > 12 && hour < 17) {
        this.setState({
          greeting: 'Good Afternoon',
          greetingIcon: 'fa-sun-o'
        })
      } else {
        this.setState({
          greeting: 'Good Evening',
          greetingIcon: 'fa-moon-o'
        })
      }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user){
      this.setState({
        categories: createCategories(nextProps.user.categories || [], nextProps.tasks || [])
      })
    }
  }


  selectCategory(category) {
    this.setState({
      category: category
    })
  }

  render() {
    var { tasks, auth, user } = this.props;

    if (this.state.category !== 'all') {
      tasks = tasks.filter(el => {
        return el.category === this.state.category && !el.finished;
      })
    } else {
      tasks = tasks.filter(el => {
        return !el.finished;
      })
    }

    return (
      <main className={'dashboard'}>
        <Categories selected={this.state.category}
          categories={createCategories(this.props.user.groups || [], this.props.tasks)}
          selectCategory={this.selectCategory}/>
        <div>
          <h2>
            <i className={`fa ${this.state.greetingIcon}`}></i>
            {user.display_name ? `${this.state.greeting}, ${user.display_name}` : this.state.greeting}
          </h2>
          <h3>Add a Task</h3>
          <AddTask category={ this.state.category }/>
          <TaskList tasks={ tasks }/>
        </div>
        <div className="filler"></div>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks || [],
    user: state.users.user || {}
  }
}

export default connect(mapStateToProps)(Dashboard);
