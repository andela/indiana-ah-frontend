import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
  <BrowserRouter>
      <h2>Welcome to Author's Haven!</h2>
    </BrowserRouter>
  </Provider>
);
export default App;
