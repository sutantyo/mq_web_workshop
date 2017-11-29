import React, { Component } from 'react';

let textAreaStyle = {
  paddingTop: "5px",
  paddingLeft: "5px",
  marginTop: "50px",
  marginBottom: "20px",
  display: "inline-block",
  background: "#feeeed",
  height: "120px",
  width: "400px",
  textAlign: "left",
  fontSize: '12px'
}

class ChatBox extends Component {
  render() {
    return (
      <div className="ChatBox">
        <div style={textAreaStyle}>
          {this.props.messages.map( (item, index) =>
            <div key={index}>{item}</div>
          )}
        </div>
      </div>
    );
  }
}
export default ChatBox;
