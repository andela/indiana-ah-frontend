import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
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
    const navbar = shallow(<NavBar />);
    expect(navbar.find('.navbar')).toBeDefined();
    expect(navbar.find('.search-logo')).toBeDefined();
  });
});
