import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const AppComp = () => (
  <Provider store={store}>
    <div>
      <h2>Welcome to Author's Haven</h2>
    </div>
  </Provider>
);
export default AppComp;
