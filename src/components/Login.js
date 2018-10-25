import React from 'react';

const login = props =>
  props.authenticated ? (
    <button onClick={props.onLogout}>Logout</button>
  ) : (
    <button onClick={props.onLogin}>Login</button>
  );

export default login;
