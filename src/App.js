import React, { Component } from 'react';

import Login from './components/Login';
import Profile from './components/Profile';

class App extends Component {
  state = {
    isAuth: false
  };

  login = () => {
    this.setState({ isAuth: true });
  };

  logout = () => {
    this.setState({ isAuth: false });
  };

  render() {
    return (
      <React.Fragment>
        <Login
          authenticated={this.state.isAuth}
          onLogin={this.login}
          onLogout={this.logout}
        />
        <Profile authenticated={this.state.isAuth} />
      </React.Fragment>
    );
  }
}

export default App;
