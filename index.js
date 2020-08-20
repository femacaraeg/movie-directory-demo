import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import schema from './models/schema';
import { dbModels } from './models/index';

const adapter = new LokiJSAdapter({
  schema,
  // migrations, // optional migrations
  useWebWorker: false, // recommended for new projects. tends to improve performance and reduce glitches in most cases, but also has downsides - test with and without it
  useIncrementalIndexedDB: true, // recommended for new projects. improves performance (but incompatible with early Watermelon databases)
  // dbName: 'myapp', // optional db name
  // It's recommended you implement this method:
  // onIndexedDBVersionChange: () => {
  //   // database was deleted in another browser tab (user logged out), so we must make sure we delete
  //   // it in this tab as well
  //   if (checkIfUserIsLoggedIn()) {
  //     window.location.reload()
  //   }
  // },
  // Optional:
  // onQuotaExceededError: (error) => { /* do something when user runs out of disk space */ },
})

const database = new Database({
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
