import React, { Component } from 'react';
import Profile from './profile/Profile.js';
import ChatBox from './chat/ChatBox.js';
import ChatInput from './chat/ChatInput.js';
import * as firebase from 'firebase';

import './App.css';
import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDLMXVt6H0tcfc6FxvPfO3riBHzB0tGirI",
  authDomain: "mqwebworkshop.firebaseapp.com",
  databaseURL: "https://mqwebworkshop.firebaseio.com",
};




class App extends Component {
  constructor(){
    super();
    this.state = {
      messages : [],
      participants : []
    }
  }
  componentWillMount(){
    firebase.initializeApp(config);
    firebase.auth().signInAnonymously().catch(function(error){
      console.log(error.code + ": " + error.message);
    });
  }

  componentDidMount(){
    firebase.database().ref('participants').on('value', snapshot => {
      this.setState({
        participants : snapshot.val()
      });
    });
  }

  handleChange(msg){
    this.setState({
      messages: this.state.messages.concat(msg)
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.participants.map( (participant,index) =>
            <Profile key={index} name={participant.name} rank={participant.rank}/>
          )
        }
        <ChatBox messages={this.state.messages}/>
        <ChatInput handleChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
export default App;
