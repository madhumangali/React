import React, { Component } from "react";

export class ClassClick extends Component {
  chageHandler() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.chageHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
