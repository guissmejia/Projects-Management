import React from 'react';
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer/>);
  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer haves 1 paragraph', () => {
    expect(footer.find('p')).toHaveLength(1);
  });

  test('Footer Snapshot', () => {
    const footer = create(<Footer/>);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});