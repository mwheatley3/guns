import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

@observer
export default class ToDoView extends Component {
  static propTypes = {
    todo: PropTypes.object,
  }

  static contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
  render() {
    const { todo } = this.props;
    console.log("todo.title", todo.title);
    return (
      <li>{todo.title}</li>
    );
  }
}
