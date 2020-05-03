import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../routes/App';

describe('<App/>', () => {
  test('Render whitout crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});