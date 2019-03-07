import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppComp from './App';
import store from './redux/store';
import './styles/styles.scss';
import Tag from './components/common/Tag.jsx';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppComp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
