import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import IndexPage from '../../src/components/IndexPage.jsx';

describe('Custom Footer component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <IndexPage />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the Index Page', () => {
    const indexPage = shallow(<IndexPage />);
    expect(indexPage.find('.container')).toBeDefined();
    const h2 = indexPage.find('h2');
    expect(h2.length).toEqual(1);
    expect(h2.text()).toEqual('Welcome to Authors Haven!');
  });
});
