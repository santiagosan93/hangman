import React, { Component } from 'react';
import Win from './win'
import Game from './game'
import Loose from './loose'
import SetWord from './set_word'
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
      hidden_word: null,
      alive: false
    }
    this.fillKeys = this.fillKeys.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.foundLetters = this.foundLetters.bind(this)
    this.gameWon = this.gameWon.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.input = React.createRef();
  }

  handleSubmit(word) {
    this.setState({
      hidden_word: word.toLowerCase(),
      alive: true
    })
  }

  resetGame() {
    this.setState({
      keys: this.fillKeys(),
      mistakes: 0,
      hidden_word: null,
      alive: false
    })
  }

  gameWon() {
    const foundLetters = this.state.keys.filter(key => key.found === true)
    return foundLetters.length === countUniqueLetters(this.state.hidden_word)
  }

  fillKeys() {
    const letters = []
    for (var i = 65; i < 91; i++) {
      letters.push({played: false, letter: String.fromCharCode(i), found: false})
    }
    letters.push({played: true, letter: ' '})
    return letters
  }

  foundLetters() {
    const foundLetters = this.state.keys.filter(key => key.found)
    return foundLetters
  }

  handleClick(letter) {

    // Makes copy of state
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
    return (
      <div>
        {/* If the word hasn't been set */}
        {this.state.hidden_word === null &&
          <div>
            <h1>Hang Man!</h1>
            <h2>Set a word to start playing!</h2>
            <SetWord handleSubmit={this.handleSubmit}/>
          </div>
        }

        {/* If the game has been won */}
        {this.gameWon() && <Win resetGame={this.resetGame}/>}

        {/* If the game hasn't been won and the player is still alive */}
        {(this.state.alive && !(this.gameWon())) &&
          <Game
            hiddenWord={this.state.hidden_word}
            mistakes={this.state.mistakes}
            keys={this.state.keys}
            maxWrongGueses={this.props.maxWrongGueses}
            foundLetters={this.foundLetters()}
            hidden_word={this.state.hidden_word}

            handleClick={this.handleClick}
            handleSubmit={this.handleSubmit}
          />
        }

        {/* If the game is dead, and a word has been set */}
        {(this.state.alive === false && this.state.hidden_word !== null) &&
          <Loose resetGame={this.resetGame} hiddenWord={this.state.hidden_word}/>
        }
      </div>
    )
  }
}

export default HangMan;
