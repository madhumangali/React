import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    // 4. short circuit operator

    return this.state.isLoggedIn && <div>Welocme Maddy</div>
    // 3. Terinary Operator

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Maddy</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 2. Element Variable

    // let message;
    // if (this.state.isLoggedIn == false) {
    //     message= <div>Welcome Guest</div>;
    //   } else {
    //     message= <div>Welcome Maddy</div>;
    //   }
    //  return message;

    //   1. if/else

    // if (this.state.isLoggedIn == false) {
    //   return <div>Welcome Guest</div>;
    // } else {
    //   return <div>Welcome Maddy</div>;
    // }
  }
}

export default UserGreeting;
