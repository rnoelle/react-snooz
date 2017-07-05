import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../../styles/navbar.css';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      className: null
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    if(e.target.scrollingElement.scrollTop > 25 && !this.state.className ) {
      this.setState({
        className: 'scrolled'
      })
    } else if (e.target.scrollingElement.scrollTop <= 25 && this.state.className) {
      this.setState({
        className: null
      })
    };
  }


  render() {
    const { location } = this.props;
    let fill = location.pathname === '/' ? this.state.className : 'scrolled';

    return (
        <div className={`navbar ${fill}`}>
          <Link to="/"><div id="top-nav-logo"></div></Link>
          <div className={`links `}>
            <Link to="/dashboard"><span className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</span></Link>
            <Link to="/profile"><span  className={location.pathname === '/profile' ? 'active' : ''}>Profile</span></Link>
          </div>
        </div>
    )
  }
}

export default withRouter(Navbar);
