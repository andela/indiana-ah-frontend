import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import homePage from './components/Home.jsx';
import UserVerificationpage from './components/UserVerificationPage.jsx';
import { signOutUser } from './redux/actions/authActions';
import { SET_CURRENT_USER } from './redux/actions/actionTypes';
import 'react-toastify/dist/ReactToastify.min.css';
import { validateToken } from './utils';
import Navbar from './components/common/Navbar.jsx';
import SocialAuthPage from './components/SocialAuthPage.jsx';
import createArticle from './components/CreateArticle.jsx';
import store from './redux/store';
import UserDashboard from './components/UserDashboard.jsx';
import NotFound from './components/NotFound.jsx';
import SingleArticlePage from './components/containers/SingleArticle.jsx';

// import requireAuth from './utils/authenticate';
import sendEmail from './components/SendVerificationEmail.jsx';

const user = validateToken(window.localStorage.getItem('token'));
if (user) {
  store.dispatch({
    type: SET_CURRENT_USER,
    user
  });
} else {
  store.dispatch(signOutUser());
}

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <ToastContainer autoClose={3000} position="top-right" />
      <Switch>
        <Route path="/articles/:slug" component={SingleArticlePage} />
        <Route path="/verifyUser" component={UserVerificationpage} />
        <Route path="/not-found" component={NotFound} exact />
        <Route path="/article/create" component={createArticle} exact />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/social-auth" component={SocialAuthPage} />
        <Route path="/articles/:id" component={SingleArticlePage} exact/>
        <Route path="/" component={homePage} exact />
        <Redirect to="/not-found" exact />
        {/* <Route path="/" component={requireAuth(Indexpage)} exact /> */}
        <Route path="/user/verify" component={sendEmail} />
        <Redirect to="not-found" exact />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
