import React, { Component } from 'react';
import styled from 'react-emotion';

const SignUpContainer = styled('form')`
  label {
    display: block;
    color: white;
    margin-bottom: 1rem;
  }
`;

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: '',
    password: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;

    this.props.handleSignUp(username, password);
  };

  render() {
    return (
      <SignUpContainer onSubmit={this.handleSubmit}>
        <p>
          <label>Username:</label>
          <input type="text" name="username" onChange={this.onChange} />
        </p>
        <p>
          <label>Password:</label>
          <input type="password" name="password" onChange={this.onChange} />
        </p>
        <p>
          <input type="submit" />
        </p>
      </SignUpContainer>
    );
  }
}

export default SignUp;
