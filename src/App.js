import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import IndexPage from './components/IndexPage.jsx';
import NavBar from './components/common/Navbar.jsx';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <NavBar />
        <Route path="/" component={IndexPage} exact />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
