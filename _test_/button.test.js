import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/styles/styledComponents/Button.jsx';

describe('Custom Button component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>Submit</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
