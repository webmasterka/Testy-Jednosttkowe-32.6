import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayerList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
	const appComponent = shallow(<App />);
	const players = [
	{
		  name: 'Kunegunda',
		  score: 5,
		},
		{
		  name: 'Antoś',
		  score: 0,
		}
	]
	appComponent.setState({ players });

	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	onScoreUpdate(0, 5);

	const playersAfterUpdate = appComponent.state().players;
	const firstPlayerScore = Number(playersAfterUpdate[0].score);

	expect(firstPlayerScore).toEqual(10);
});


it('add new player to players list', () => {
	const appComponent = shallow(<App />);
	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd('Ania');
	const players = appComponent.state().players;

  	expect(players.length).toEqual(3);
	expect(players[2].name).toEqual('Ania');
	expect(players[2].score).toEqual(0);
});

it('should remove player from players list', () => {
	const appComponent = shallow(<App />);
	const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
	onPlayerRemove(3);
	const players = appComponent.state().players;

  	expect(players.length).toEqual(2);
});