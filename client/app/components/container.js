import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';


@withRouter
export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
};
  render() {
    return (
      <div>
          <h1>This is the Container</h1>
          <Link to="todo">TO DO</Link>
          <br />
          <Link to="address">Address</Link>
          { this.props.children }
      </div>
    );
  }
}
