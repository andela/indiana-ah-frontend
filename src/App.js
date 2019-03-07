import React from 'react';
import { BrowserRouter, Route , Switch, Link, NavLink} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import IndexPage from './components/IndexPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact/>
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default App;
