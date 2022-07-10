import React from 'react';
import renderer from 'react-test-renderer';

import { App } from '../../App';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<App name="World" enthusiasmLevel={1} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});