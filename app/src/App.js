import React, { Component } from 'react';
import logo from './logo.svg';
import Profile from './profile/Profile.js';
import ChatBox from './chat/ChatBox.js';
import ChatInput from './chat/ChatInput.js';

import './App.css';


let participants = [
  {name: "terry", rank: "novice"},
  {name: "tim", rank: "novice"},
  {name: "matt", rank: "novice"},
  {name: "ronald", rank: "master"},
  {name: "bash", rank: "retired"}
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      messages : []
    }
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
          participants.map( (participant,index) =>
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
