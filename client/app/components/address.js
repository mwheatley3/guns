import React, { Component } from 'react';
import { withRouter } from 'react-router';

@withRouter
export default class Address extends Component {
  render() {
    return <h1>We are located at 555 Jackson St.</h1>;
  }
}
