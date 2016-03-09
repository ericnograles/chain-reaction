import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
  render() {
    const { email, password, user, handleEmail, handlePassword } = this.props;

    return (
      <div className="loginForm">
        Email: <input type="text" /> <br />
        Password: <input type="text" />
      </div>
    );
  }
}