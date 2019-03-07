import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import IndexPage from '../src/components/IndexPage.jsx';

describe('Custom Footer component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders a footer', () => {
    const indexPage = shallow(<IndexPage />);
    expect(indexPage.find('.container')).toBeDefined();
    const h2 = indexPage.find('h2');
    expect(h2.length).toEqual(1);
    expect(h2.text()).toEqual('Welcome to Author\'s Haven!');
  });
});