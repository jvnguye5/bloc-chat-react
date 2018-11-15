import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPXjWQDKiiBqcnstGuXHMuVUafS3h05LI",
    authDomain: "bloc-chat-react-e31c8.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-e31c8.firebaseio.com",
    projectId: "bloc-chat-react-e31c8",
    storageBucket: "bloc-chat-react-e31c8.appspot.com",
    messagingSenderId: "834023023870"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;