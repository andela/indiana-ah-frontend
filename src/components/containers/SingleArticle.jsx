import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getSingleArticle from '../../redux/actions/getSingleArticleActions/getSingleArticleActions';

class SingleArticle extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { slug } = match.params;
    this.props.getSingleArticle(slug);
  }

  render() {
    return <div> Hello this works{console.log(this.props.singleArticle)}</div>;
  }
}

SingleArticle.propTypes = {
  getSingleArticle: PropTypes.func,
  singleArticle: PropTypes.object,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired
};

const mapStateToProps = state => ({
  singleArticle: state.singleArticle
});

export default connect(
  mapStateToProps,
  { getSingleArticle }
)(SingleArticle);
