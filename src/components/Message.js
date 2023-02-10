import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();

    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMeassage() {
    this.setState({
        message: "Thank you for Subscribing"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={ () => {this.changeMeassage()} }>Subscribe</button>
      </div>
    );
  }
}

export default Message;
