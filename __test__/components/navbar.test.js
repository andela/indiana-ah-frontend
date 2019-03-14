import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import NavBar from '../../src/components/common/Navbar.jsx';

describe('Custom Navbar component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders a navbar', () => {
    const navbar = mount(<NavBar isAuthenticated={false}/>);
    expect(navbar.find('.navbar')).toBeDefined();
    const inputField = navbar.find('input');
    const button = navbar.find('button');
    expect(inputField.length).toEqual(0);
    expect(button.length).toEqual(1);
  });
  it('renders a navbar', () => {
    const navbar = mount(<NavBar isAuthenticated={true} />);
    expect(navbar.find('.navbar')).toBeDefined();
    const inputField = navbar.find('input');
    expect(inputField.length).toEqual(1);
  });
});
