import React from 'react';
import Header from '../../components/Header';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

describe('<Header/>', () => {
  test('Render header component', () => {
    const header = mount(<Header/>);
    expect(header.length).toEqual(1); 
  });
    test('Header Snapshot', () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});