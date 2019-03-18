import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import IndexPage from './components/IndexPage.jsx';
import Footer from './components/common/footer.jsx';
import 'react-toastify/dist/ReactToastify.min.css';
import Navbar from './components/common/Navbar.jsx';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <ToastContainer autoClose={3000} position="top-right" />
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Redirect to="not-found" exact />
        <Footer />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default App;
