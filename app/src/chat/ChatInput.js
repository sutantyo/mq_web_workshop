import React, { Component } from 'react';

let textInputStyle = {
  height: "120px",
  width: "400px",
  display: "inline-block",
}

class ChatInput extends Component {
  handleTextInput(event){
    if (event.charCode === 13){
        this.props.handleChange(event.target.value);
        this.inputBox.value = "";
    }
  }
  render() {
    return (
        <div style={textInputStyle}>
        <input ref={el => this.inputBox = el} type="text"
               onKeyPress={this.handleTextInput.bind(this)}/>
        </div>
    );
  }
}
export default ChatInput;
