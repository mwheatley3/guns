import React, { Component, PropTypes } from 'react';
import DevTool from 'mobx-react-devtools';
import { withRouter } from 'react-router';

import TodoStore from '../store.js';
const store = new TodoStore;

@withRouter
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
};

  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext() {
    return {
      store: store,
    };
  }

  render() {
    return (<div>
                <DevTool />
                  <h1>This is your app</h1>
                    { this.props.children }
            </div>
    );
  }
}
