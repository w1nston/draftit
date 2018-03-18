import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import App from './App';
import './index.css';

if (window.firebase) {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  };
  window.firebase.initializeApp(config);
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
