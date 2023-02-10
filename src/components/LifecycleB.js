import React, { Component } from "react"

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Madhu'
    }

    console.log("LifecycleB Constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycleB componetDidMount")
  }

  shouldComponentUpdate(){
    console.log("LifecycleB shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("LifecycleB getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("LifecycleB componentDidUpdate")
  }


  render() {
    console.log("LifeCycleB render")
    return  <div>Lifecycle B</div>
  }
}

export default LifecycleB
