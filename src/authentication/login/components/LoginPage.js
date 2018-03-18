import React, { Component, Fragment } from 'react';
import { css } from 'emotion';

const loginFormStyle = css`
  display: flex;
  flex-direction: column;
`;

const inputStyle = css`
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
  box-shadow: 0 2px 0 #ececec inset;
  box-sizing: border-box;
  color: #333;
  font-size: 0.875rem;
  height: 42px;
  margin-bottom: 8px;
  padding: 0 8px;

  @media(min-width: 991px) {
    width: 250px;
  }
`;

const loginButtonStyle = css`
  background-color: #14ad5b;
  color: #fbfbfd;
  font-size: 1.125rem;
  font-weight: 700;
  height: 42px;
  width: 100%;

  @media(min-width: 991px) {
    width: 250px;
  }
`;

class LoginPage extends Component {
  state = { email: '', password: '' };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  clearFields = () => {
    this.setState({ email: '', password: '' });
  };

  handleLogin = event => {
    event.preventDefault();
    const { email, password } = this.state;

    if (email === '' || password === '') {
      return;
    }

    this.props.onSubmit && this.props.onSubmit({ email, password });
    
    this.clearFields();
  };

  render() {
    const { email, password } = this.state;

    return (
      <Fragment>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin} className={loginFormStyle} method="POST">
          <label htmlFor="email">Email</label>
          <input
            className={inputStyle}
            type="email"
            value={email}
            onChange={this.handleEmailChange}
            name="email"
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            className={inputStyle}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
            name="password"
            placeholder="Password"
          />
          <button className={loginButtonStyle} type="submit">Login</button>
        </form>
      </Fragment>
    );
  }
}

export default LoginPage;
