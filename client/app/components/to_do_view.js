import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

@observer
@withRouter
export default class ToDoView extends Component {

  static contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
  render() {
    const store = this.context.store;
    console.log("this.context", this.context);
    return (
      <div>
          <h1>Todo</h1>
          <h2>{ store.todos }</h2>
      </div>
    );
  }
}
