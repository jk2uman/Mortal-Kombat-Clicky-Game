import React, { Component } from 'react';
import characters from "./characters"
import KombatCard from './component/KombatCard/KombatCard';
import Navigate from "./component/Navigate/Navigate";
import Routine from "./component/Routine/Routine";
import Title from "./component/Title/Title";
import './App.css';

class App extends Component {

  state = {
    characters: characters.map(character => ({ ...character })),
    currentScore: 0,
    highScore: 0,
    yourGuess: "",
  };

  handleClick = id => {

    const chosenCharacter = this.state.characters.find(name => name.id === id);
    console.log(chosenCharacter);

    if (chosenCharacter.clicked === false) {
      chosenCharacter.clicked = true;
      console.log(chosenCharacter);
      const shuffledCharacters = this.state.characters.sort((a, b) => 0.5 - Math.random());
      this.setState({ characters: shuffledCharacters })
      this.handleIncrement();
      console.log(this.state.currentScore);
    }

    else {

      if (this.state.currentScore === 15) {
        alert("Congratulations! Flawless Victory!");
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({ ...character }))
        });
      }

      else if (this.state.currentScore > this.state.highScore) {
        alert("Game Over! Congrats on your new high score!")
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({ ...character }))
        });
      }

      else {
        alert("You already clicked that one! Hahaha your soul is mine!");
        this.setState({
          currentScore: 0,
          characters: characters.map(character => ({ ...character }))
        });
      }
    }
  }
  handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    console.log(this.state.currentScore);
  };


  render() {
    const { handleClick } = this
    const { currentScore, highScore, yourGuess } = this.state
    return (
      <div>
        <Navigate
          currentScore={currentScore}
          highScore={highScore}
          yourGuess={yourGuess}
        />
        <Routine>
          <Title>Click each Mortal Kombat character once to earn points.
  <br></br>
            Click the same character twice and it's game over.
  </Title>
          {this.state.characters.map(character => {
            console.log("click function: ", handleClick);
            return <KombatCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              clicked={character.clicked}
              handleClick={handleClick}
            />
          })}
        </Routine>
      </div>
    );
  }
};





export default App;
