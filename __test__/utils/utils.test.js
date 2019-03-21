import { setAndGetCurrentPage, getUrl } from '../../src/utils';

describe('Pagination utils test', () => {
  const component = {
    state: {},
    setState(obj) {
      Object.assign(this.state, obj);
    }
  };
  it('should test that the current page is set in a component\'s state when the \'setCurrentPage\' method is called', () => {
    setAndGetCurrentPage(component);
    expect(component.state.currentPage).toBeDefined();
  });
});

describe('Backend url', () => {
  it('should point to the right backend branch', () => {
    const url = getUrl(window.location.hostname);
    expect(url).toEqual('https://indiana-ah-staging.herokuapp.com/api/v1/');
  });
  it('should point to the right backend branch', () => {
    const host = 'https://indiana-ah-frontend-master.herokuapp.com';
    const url = getUrl(host);
    expect(url).toEqual('https://indiana-ah-master.herokuapp.com/api/v1/');
  });
});
