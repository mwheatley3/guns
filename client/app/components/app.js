import { Component, PropTypes } from 'react';
// import { Router, Route, browserHistory } from 'react-router';
// import Address from './address.js';
const { element } = PropTypes;

export default class App extends Component {
  static propTypes = {
    children: element.isRequired,
};
  render() {
    return this.props.children;
  }
}
// const Home = () => <h1>Hello from Home!</h1>;
// const Address = () => <h1>We are located at 555 Jackson St.</h1>;
// export default App;
