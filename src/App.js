import React, { Fragment } from 'react';
import Navbar from './components/common/Navbar.jsx';
import './styles/styles.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
