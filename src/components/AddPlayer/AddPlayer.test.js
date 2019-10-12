import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow, mount } from 'enzyme';


it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('adds player correctly', () => {
  const onPlayerAdd = jest.fn(); //mock
  const AddPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
  const nameInput = AddPlayerComponent.find('input').first().getDOMNode();

  nameInput.value = "Ania";
  const form = AddPlayerComponent.find('form');
  form.simulate('submit');

  expect(onPlayerAdd).toBeCalledWith("Ania");
});