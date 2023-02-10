import React, { Component } from "react";

 class EventBind extends Component {
  constructor() {
    super();

    this.state = {
      message: "hello",
    };

    // this.changeHandler =this.changeHandler.bind(this)
  }

  

  // changeHandler(){
  //     this.setState({
  //         message: 'Good Bye!'
  //     })
  // }

  changeHandler = () => {
    this.setState({
      message: "Good Bye!"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={ this.changeHandler.bind(this) }>Click</button> */}
        {/* <button onClick={() => this.changeHandler() }>Click</button> */}
        <button onClick={this.changeHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
