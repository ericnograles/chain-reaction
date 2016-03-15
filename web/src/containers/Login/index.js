import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as common from '../../../../common';
import LoginForm from '../../components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status === 'authenticated') {
      browserHistory.push('/sample');
    }
  }

  handleEmail(event) {
    this.props.dispatch(common.actions.keyPressEmail(event.target.value))
  }

  handlePassword(event) {
    this.props.dispatch(common.actions.keyPressPassword(event.target.value));
  }

  handleLogin() {
    const { dispatch, email, password } = this.props;
    dispatch(common.actions.requestLogin(email));
    dispatch(common.actions.login(email, password));
  }

  render() {
    const { email, password, user } = this.props;
    const hasLoginError = this.props.user.error;
    return (
      <div>
        <LoginForm email={email}
                   password={password}
                   user={user}
                   handleEmail={this.handleEmail}
                   handlePassword={this.handlePassword}
                   handleLogin={this.handleLogin} />
        <div className="login-error">
          {hasLoginError ? 'Error logging in. ' + this.props.user.error : null}
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { email, password, user } = state;
  return {
    email,
    password,
    user
  };
}

export default connect(mapStateToProps)(Login);