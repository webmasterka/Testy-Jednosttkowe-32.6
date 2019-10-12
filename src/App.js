import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayerList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
 constructor() {
   super();

  this.state = {
        players: [
          {
            index: 0,
            name: 'Kunegunda',
            score: 5,
          },
          {
            index: 1,
            name: 'Antoś',
            score: 0,
          }
        ]
      }
    }

 onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return {...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
 }

 onPlayerAdd = (playerName) => {
  const newPlayer = {
    index: Math.floor(Math.random() * 1000) + 1,
    name: playerName,
    score: 0,
  }
  this.setState({
    players: [...this.state.players, newPlayer]
  })
 }

 onPlayerRemove = (playerIndex) => {
  this.setState({
    players: this.state.players.filter(player => player.index !== playerIndex)
  })
 }

 render() {
   return (
     <div className="App">
       <AddPlayer onPlayerAdd={this.onPlayerAdd} />
       <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove}/>
     </div>
   );
 }
}

export default App;