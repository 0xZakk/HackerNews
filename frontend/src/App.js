import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { css } from "emotion";
import decode from "jwt-decode";
import Header from "./Header";
import ItemList from "./ItemList";
import Item from "./Item";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import NewItem from "./NewItem";

class App extends Component {
  state = {
    items: [],
    user: {}
  };

  componentDidMount() {
    fetch("http://localhost:8000/items/")
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }

  handleSignIn = (username, password) => {
    fetch("http://localhost:8000/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(user => {
        this.setState(
          {
            user: {
              token: user.token,
              ...decode(user.token)
            }
          },
          () => this.props.history.push("/")
        );
      });
  };

  handleSignUp = (username, password) => {
    fetch("http://localhost:8000/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(user => {
        this.setState(
          {
            user: {
              token: user,
              ...decode(user)
            }
          },
          () => this.props.history.push("/")
        );
      });
  };

  handleCreateItem = (title, url) => {
    console.log(title, url);
    fetch("http://localhost:8000/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.state.user.token}`
      },
      body: JSON.stringify({
        title,
        url
      })
    })
      .then(res => res.json())
      .then(item => {
        console.log(item);
        this.setState(
          {
            items: [...this.state.items, item]
          },
          () => this.props.history.push(`/item/${item.id}`)
        );
      });
  };

  render() {
    return (
      <div className="App">
        <Header {...this.state.user} />
        <main
          className={css`
            width: 90%;
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={props => <ItemList {...props} items={this.state.items} />}
            />
            <Route
              path="/sign-in"
              render={props => (
                <SignIn {...props} handleSignIn={this.handleSignIn} />
              )}
            />
            <Route
              exact
              path="/sign-up"
              render={props => (
                <SignUp {...props} handleSignUp={this.handleSignUp} />
              )}
            />
            <Route
              path="/item/new"
              render={props => (
                <NewItem {...props} handleCreateItem={this.handleCreateItem} />
              )}
            />
            <Route
              path="/item/:id"
              render={props => {
                let item = this.state.items.find(
                  item => item.id === parseInt(props.match.params.id)
                );
                return <Item {...props} data={item} />;
              }}
            />
          </Switch>
        </main>
        <main />
      </div>
    );
  }
}

export default withRouter(App);
