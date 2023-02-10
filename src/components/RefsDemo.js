import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.cbRef= null;
    this.setCbRef = element =>{
      this.cbRef=element;
    }
  }

  componentDidMount() {

    if(this.cbRef){
      this.cbRef.focus()
    }
    // this.inputRef.current.focus();
    // console.log("this.inputRef")
  }

  onChangeHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type={"textarea"} ref={this.inputRef}></input>
        <input type={"textarea"} ref={this.setCbRef}></input>
        <button onClick={this.onChangeHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
