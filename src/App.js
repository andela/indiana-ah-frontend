import React, { Fragment } from 'react';
import NavBar from './components/common/Navbar.jsx';
import './styles/styles.scss';
import Footer from './components/common/footer.jsx';

const App = () => (
  <Fragment>
    <NavBar />
    <h2 className="gg">Welcome to Authors Havenn!</h2>
    <Footer />
  </Fragment>
);
export default App;
