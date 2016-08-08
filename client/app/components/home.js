import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
          <h1>This is the home page</h1>
          <Link to="todo">TO DO</Link>
      </div>
    );
  }
}
