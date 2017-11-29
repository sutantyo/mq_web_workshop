import React, { Component } from 'react';

let style = {
  height: "40px",
  width: "200px",
  display: "inline-block",
  marginLeft: "5px",
  marginBottom: "5px"
}

class Profile extends Component {
  capitalise(name){
      return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    return (
      <span style={style} className="Profile">
        <h3> Name: {this.capitalise(this.props.name)}</h3>
        <p> Rank: {this.props.rank}</p>
      </span>
    );
  }
}
export default Profile;
