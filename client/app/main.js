import App from './components/app.js';
import { render } from 'react-dom';
import React from 'react';
import routes from './routes.js';


import { useStrict } from 'mobx';
useStrict(true);

render(<App>{ routes }</App>,
  document.getElementById('root')
);
