import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './components/common/footer.jsx';
import store from './redux/store';
import VerifyUser from './views/UserVerificationPage';
import IndexPage from './components/IndexPage.jsx';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <ToastContainer autoClose={false} position="top-right" />
        <Switch>
          <Route path="/verifyUser" component={VerifyUser} />
          <Route path="/" component={IndexPage} exact />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
