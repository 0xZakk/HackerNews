import React, { Component } from "react";
import Header from "./Header";
import Item from "./Item";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/items/")
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.state.posts.map((post, i) => (
            <Item key={i} {...post} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
