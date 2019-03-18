/* eslint-disable import/no-named-as-default */
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import IndexPage from './components/IndexPage.jsx';
import Footer from './components/common/footer.jsx';
import UserVerificationPage from './components/UserVerificationPage.jsx';
import { SET_CURRENT_USER } from './redux/actions/actionTypes';
import 'react-toastify/dist/ReactToastify.min.css';
import { validateToken } from './utils';
import NavBar from './components/common/Navbar.jsx';
import store from './redux/store';

const user = validateToken(window.localStorage.getItem('token'));
if (user) {
  store.dispatch({
    type: SET_CURRENT_USER,
    user
  });
}

const App = () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      <ToastContainer autoClose={3000} position="top-right" />
      <Switch>
        <Route path="/verifyUser" component={UserVerificationPage} />
        <Route path="/" component={IndexPage} exact />
        <Redirect to="not-found" exact />
        <Footer />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default App;
