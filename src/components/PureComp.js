import React, { PureComponent } from 'react'
import ParentComp from './ParentComp';

 class PureComp extends PureComponent {
  render() {
    console.log("******** PureComp ********")
    return (
      <div>
       Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp;
