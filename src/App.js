import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

const AppComp = () => (
  <Provider store={store}>
    <div>
      <h2>this is indiana front-end pages kelvin</h2>
    </div>
  </Provider>
);
export default AppComp;
