import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { css } from 'emotion';
import decode from 'jwt-decode';
import Header from './Header';
import ItemList from './ItemList';
import Item from './Item';
import SignUp from './SignUp';

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch('http://localhost:8000/items/')
      .then(res => res.json())
      .then(items => this.setState({ items }));
  }

  handleSignUp = (username, password) => {
    fetch('http://localhost:8000/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({
          user: user
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main
          className={css`
            width: 90%;
            max-width: 900px;
            margin: 0 auto;
          `}>
          <Route
            exact
            path="/"
            render={props => <ItemList {...props} items={this.state.items} />}
          />
          <Route path="/sign-in" />
          <Route
            path="/sign-up"
            render={props => (
              <SignUp {...props} handleSignUp={this.handleSignUp} />
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
        </main>
        <main />
      </div>
    );
  }
}

export default App;
