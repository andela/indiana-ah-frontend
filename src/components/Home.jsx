import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Index from './IndexPage.jsx';
import PersonalisedView from './personalised/Index.jsx';

export const Home = ({ auth: { isAuthenticated } }) => (isAuthenticated ? <PersonalisedView /> : <Index />);

Home.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
