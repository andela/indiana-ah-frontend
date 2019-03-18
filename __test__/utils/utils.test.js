import { handlePageClick, setCurrentPage } from '../../src/utils';

describe('Pagination utils test', () => {
  const component = {
    state: {},
    setState(obj) {
      Object.assign(this.state, obj);
    }
  };
  it('should test that the current page is set in a component\'s state when the \'setCurrentPage\' method is called', () => {
    setCurrentPage(component);
    expect(component.state.currentPage).toBeDefined();
  });

  it('should test that the handle page click function sets the current page in a component\'s state', () => {
    handlePageClick(component, 2);
    expect(component.state.currentPage).toEqual(2);
  });
});
