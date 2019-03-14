import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './components/common/footer.jsx';
import store from './redux/store';
import IndexPage from './components/IndexPage.jsx';
import PersonalisedViewComponent from './components/personalised/Index.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import NavBar from './components/common/Navbar.jsx';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <NavBar isAuthenticated={false}/>
        <Switch>
          <Route path="/" component={IndexPage} exact />
          <Route path="/personalisedView" component={PersonalisedViewComponent} exact />
         <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
