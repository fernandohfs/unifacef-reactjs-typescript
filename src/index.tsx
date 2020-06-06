import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import * as Sentry from '@sentry/browser';

import Routes from './routes';
import * as store from './mobx';
import { router } from './mobx';

import './plugins/sentry.plugin';
import 'semantic-ui-css/semantic.min.css';
import './apis/axios.api';

import Loading from './components/loading';

import * as serviceWorker from './serviceWorker';

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Loading />
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);

serviceWorker.unregister();
