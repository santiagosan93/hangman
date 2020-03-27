import React, { Component } from 'react';
import Man from './man'
import HiddenWord from './hidden_word'
import KeysContainer from './keys_container'
import countUniqueLetters from '../helpers/c_u_letters'

class HangMan extends Component {
  static defaultProps = {
    maxWrongGueses: 6
  }

  constructor(props) {
    super(props)
    this.state = {
      keys: this.fillKeys(),
      mistakes: 0,
      hidden_word: 'apple',
      alive: true
    }
    this.fillKeys = this.fillKeys.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.foundLetters = this.foundLetters.bind(this)
    this.gameWon = this.gameWon.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  resetGame() {
    this.setState({
      keys: this.fillKeys(),
      mistakes: 0,
      hidden_word: 'apple',
      alive: true
    })
  }

  gameWon() {
    const foundLetters = this.state.keys.filter(key => key.found === true)
    console.log(foundLetters, this.state.hidden_word)
    return foundLetters.length === countUniqueLetters(this.state.hidden_word)
  }

  fillKeys() {
    const letters = []
    for (var i = 65; i < 91; i++) {
      letters.push({played: false, letter: String.fromCharCode(i), found: false})
    }
    return letters
  }

  foundLetters() {
    const foundLetters = this.state.keys.filter(key => key.found)
    return foundLetters
  }

  handleClick(letter) {
    console.log('hey')
    const keys = [...this.state.keys]
    const index = keys.findIndex(key => key.letter === letter)
    const key = keys[index]
    key.found = this.state.hidden_word.includes(letter.toLowerCase()) ? true : false
    key.played = true
    keys[index] = key
    this.setState((prevState) => {
      return {
        keys: keys,
        mistakes: prevState.hidden_word.includes(letter.toLowerCase()) ? prevState.mistakes : prevState.mistakes + 1,
        alive: this.state.mistakes < this.props.maxWrongGueses - 1
      }
    })
  }

  render() {
    if (this.gameWon()) {
      return (
        <div>
          <h1>Yeeeei you woon!</h1>
          <button onClick={this.resetGame}>Play again!</button>
        </div>
      )
    }else if(this.state.alive) {
      return (
        <div className='hang-box'>
          <Man mistakes={this.state.mistakes} maxWrongGueses={this.props.maxWrongGueses}/>
          <HiddenWord word={this.state.hidden_word} foundLetters={this.foundLetters()}/>
          <KeysContainer keys={this.state.keys} handleClick={this.handleClick}/>
        </div>
      )
    }else {
      return(
        <div>
          <h1>You LOOOOOOOOSEER!!!!!</h1>
          <button onClick={this.resetGame}>Play again!</button>
        </div>
      )
    }
  }
}

export default HangMan;
