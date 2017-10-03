import React from 'react';
import renderer from 'react-test-renderer';
import Todo from "./Todo";

test('Rendering correctly', () => {
  const tree = renderer.create(
    <Todo todo={{text:"Test", id:1, done: false}}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
