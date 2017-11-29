import React, { Component } from 'react';
import Profile from './profile/Profile.js';
import ChatBox from './chat/ChatBox.js';
import ChatInput from './chat/ChatInput.js';
import * as firebase from 'firebase';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      messages : [],
      participants : []
    }
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
