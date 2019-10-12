import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('renders correct amount of players', () => {
  const players = [
    {
        name: 'Jan',
        score: 5
    },
    {
        name: 'Agnieszka',
        score: 0
    }
]
	const playerComponent = shallow(<PlayersList players={players} />);
	const expectedPlayersNumber = playerComponent.find(Player).length;
	expect(expectedPlayersNumber).toEqual(2);
});

it("renders correct player's score", () => {
	const players = [
	    {
	        name: 'Jan',
	        score: 5
	    },
	    {
	        name: 'Agnieszka',
	        score: 0
	    }
	]	
	const mockedOnScoreUpdate = jest.fn();
	const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
	const firstPlayer = playerComponent.find(Player).first();
	const secondPlayer = playerComponent.find(Player).last();
	const onPlayerScoreChange = secondPlayer.prop('onPlayerScoreChange');
	onPlayerScoreChange(5);
	expect(mockedOnScoreUpdate).toBeCalledWith(1, 5);
});	
