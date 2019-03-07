import React, { Fragment } from 'react';
import NavBar from './components/common/Navbar.jsx';
import './styles/styles.scss';
import Footer from './components/common/footer.jsx';

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
