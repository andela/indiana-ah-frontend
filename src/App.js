/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-named-as-default */
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import Footer from './components/common/footer.jsx';
import UserVerificationPage from './components/UserVerificationPage.jsx';
import Home from './components/Home.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import { SET_CURRENT_USER } from './redux/actions/actionTypes';
import SocialAuthPAge from './components/SocialAuthPage.jsx';
import 'react-toastify/dist/ReactToastify.min.css';
import { validateToken } from './utils';
import NavBar from './components/common/Navbar.jsx';
import store from './redux/store';

const user = validateToken(localStorage.getItem('token'));
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
        <Route path="/social-auth" component={SocialAuthPAge} />
        <Route path="/not-found" component={NotFoundPage} />
        <Route path="/" component={Home} exact />
        <Redirect to="not-found" exact />
        <Footer />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default App;
