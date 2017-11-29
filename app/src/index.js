import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDLMXVt6H0tcfc6FxvPfO3riBHzB0tGirI",
  authDomain: "mqwebworkshop.firebaseapp.com",
  databaseURL: "https://mqwebworkshop.firebaseio.com",
};
firebase.initializeApp(config);
firebase.auth().signInAnonymously().catch(function(error){
  console.log(error.code + ": " + error.message);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
