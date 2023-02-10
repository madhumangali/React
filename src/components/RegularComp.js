import React, { Component } from 'react'
import ParentComp from './ParentComp';

 class RegularComp extends Component {
  render() {
    console.log("******** Reg ********")
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegularComp;
