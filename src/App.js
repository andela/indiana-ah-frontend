import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';

const AppComp = () => (
  <Provider store={store}>
  <BrowserRouter>
    <div>
      <h2>Welcome to Author's Haven</h2>
    </div>
    </BrowserRouter>
  </Provider>
);
export default AppComp;
