import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import IndexPage from './components/IndexPage.jsx';
import LoginContainer from './components/LoginFormContainer.jsx';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={LoginContainer} exact />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
