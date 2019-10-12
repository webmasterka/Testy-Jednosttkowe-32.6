import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const PlayersList = (props) => (
   <ul className="PlayersList">
      <h2>Players List:</h2>
       {props.players.map((player, i) => (
           <Player
               key={i}
               name={player.name}
               index={player.index}
               score={player.score}
               onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
               onPlayerRemove ={(i) => props.onPlayerRemove(player.index)}
           />)
       )}
   </ul>
);

export default PlayersList;