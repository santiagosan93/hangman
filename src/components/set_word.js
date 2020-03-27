import React, { Component } from 'react'

class SetWord extends Component {
  constructor(props) {
    super(props)
    this.setWord = this.setWord.bind(this)
    this.input = React.createRef();
  }

  setWord(event) {
    event.preventDefault();
    this.props.handleSubmit(this.input.current.value)
  }


  render() {
    return (
      <form onSubmit={this.setWord}>
        <input
          type="text"
          placeholder='Set a word!'
          ref={this.input}
        />
        <input type="submit" hidden={true}/>
      </form>
    )
  }
}

export default SetWord
