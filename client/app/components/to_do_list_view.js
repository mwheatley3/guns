import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ToDoEntry from './to_do_entry.js';
import ToDoView from './to_do_view.js';

@observer
export default class ToDoListView extends Component {

  static contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
  render() {
    const store = this.context.store;
    return (
      <div>
          <h1>To Do LIst</h1>
          <ul>{store.todos.map(todo => <ToDoView key= { todo.id } todo={ todo }/>)}</ul>
          <ToDoEntry />
      </div>
    );
  }
}
