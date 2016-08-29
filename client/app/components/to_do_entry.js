import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

@observer

export default class ToDoEntry extends Component {
  static contextTypes = {
      router: PropTypes.object.isRequired,
      store: PropTypes.object.isRequired,
  };
  @action
  onSubmit(e) {
      e.preventDefault();

      const { store } = this.context;

      const { toDoInput } = this.refs;
      store.addTodo(toDoInput.value.trim());
  }

  render() {
    return (
      <div>
          <h3>Add a Todo</h3>
          <div className="entry">
              <form className="box" onSubmit={ e => this.onSubmit(e) }>
                  <input ref="toDoInput" placeholder="New TO DO"/>
                  <button>Add TO DO</button>
              </form>
          </div>
      </div>
    );
  }

}
