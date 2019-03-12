import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import IndexPage from './components/IndexPage.jsx';
import ArticlesPage from './components/Articles';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/" component={IndexPage} exact />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default App;
