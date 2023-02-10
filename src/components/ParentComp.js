import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : "Madhu"
      }
    }

    componentDidMount(){
       setInterval( () => this.setState({
            name : "madhu"
        }), 2000 )
    }
    
  render() {
    console.log("******** Parent ********")
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} ></MemoComp>
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp