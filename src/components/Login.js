import React from 'react';

const login = props => {
  console.log(props);
  return (
    <React.Fragment>
      <button onClick={props.onLogout}>Logout</button>
      <button onClick={props.onLogin}>Login</button>
    </React.Fragment>
  );
};

export default React.memo(login);
