import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
  render() {
    const { email, password, user, handleEmail, handlePassword } = this.props;

    return (
      <div className="loginForm">
        Email: <input type="text" onChange={this.props.handleEmail} /> <br />
        Password: <input type="text" onChange={this.props.handlePassword} />
      </div>
    );
  }
}