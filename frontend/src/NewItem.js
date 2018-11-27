import React, { Component } from "react";

class NewItem extends Component {
  state = {
    title: "",
    url: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let title = e.target[0].value;
    let url = e.target[1].value;

    this.props.handleCreateItem(title, url);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" />
        </p>
        <p>
          <label htmlFor="url">URL:</label>
          <input type="url" name="url" />
        </p>
        <p>
          <input type="submit" value="Save" />
        </p>
      </form>
    );
  }
}

export default NewItem;
