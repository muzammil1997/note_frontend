import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import firebase from 'firebase/app';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbp61Zks2TqgSCOMeelsnjDc5U-k-0uec",
  authDomain: "note-taker-a6929.firebaseapp.com",
  databaseURL: "https://note-taker-a6929.firebaseio.com",
  projectId: "note-taker-a6929",
  storageBucket: "note-taker-a6929.appspot.com",
  messagingSenderId: "418483157982",
  appId: "1:418483157982:web:d52fdffa726dc5c18d7b4f",
  measurementId: "G-6R3WG6K5QR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <App/>, 
document.querySelector('#root')
);