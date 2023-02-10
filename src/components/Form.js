import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userName : '',
         comments : '',
         topic : 'react'
      }
    }

    onChangeUsernameHandler = event => {
       this.setState({
        userName : event.target.value
       })
    }
    
    onChangeCommentsHandler = event => {
        this.setState({
         comments : event.target.value
        })
     }

     onChangeTopicHandler = event => {
        this.setState({
         topic : event.target.value
        })
     }

     onSubmitHandler = event => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
     }

  render() {

    const {userName, comments, topic} = this.state
    return (
      <form onSubmit={this.onSubmitHandler} >
        <div>
            <label>Username : </label>
            <input value={userName} onChange={this.onChangeUsernameHandler}></input>
        </div>
        <div>
            <label>Comments : </label>
            <textarea value={comments} onChange={this.onChangeCommentsHandler}></textarea>
        </div>
        <div>
            <label>Topic : </label>
            <select value={topic} onChange={this.onChangeTopicHandler}>
                <option value= "react">React</option>
                <option value= "angular">Angular</option>
                <option value= "vue">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
