import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
  render() {
    const { email, password, user, handleEmail, handlePassword, handleLogin } = this.props;
    var buttonText = user.status === 'authenticating' ? 'Logging in...' : 'Login';

    return (
      <div className="loginForm">
        Email: <input type="text" onChange={handleEmail} /> <br />
        Password: <input type="text" onChange={handlePassword} /> <br />
        <input type="button" value={buttonText} onClick={handleLogin} />
      </div>
    );
  }
}