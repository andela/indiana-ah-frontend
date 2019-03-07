import React, { Fragment } from 'react';
import NavBar from './components/common/Navbar.jsx';

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
