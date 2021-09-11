import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

test('Home test', () => {
  const component = renderer.create(
    <Home />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
