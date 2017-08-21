import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from '../components/view/home';

import { authUrl } from '../services/apiUrl';

function Login({auth}) {
  if (auth.isAuthenticated()) {
    return (
      <Redirect to="/" />
    )
  } else {
    window.location.assign(`${authUrl}login`);
    return (
      <Home />
    )
  }
}

export default Login;
