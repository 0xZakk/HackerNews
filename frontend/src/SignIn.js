import React, { Component } from "react";
import styled from "react-emotion";

const SignInContainer = styled("form")`
  label {
    display: block;
    color: white;
    margin-bottom: 1rem;
  }
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: "",
    password: ""
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

    this.props.handleSignIn(username, password);
  };

  render() {
    return (
      <SignInContainer onSubmit={this.handleSubmit}>
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
      </SignInContainer>
    );
  }
}

export default SignIn;
