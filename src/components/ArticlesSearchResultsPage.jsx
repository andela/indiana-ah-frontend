import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TopBarProgress from 'react-topbar-progress-indicator';
import PropTypes from 'prop-types';
import { searchArticles } from '../redux/actions/articleActions/articleActions';
import SearchResultsCard from './common/SearchResultsCard.jsx';
import Footer from './common/footer.jsx';

class ArticlesSearchPage extends Component {
  state = {};

  componentDidMount() {
    const query = `${this.props.location.search}`;
    this.props.searchArticles(query);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search === this.props.location.search) return;
    const query = `${this.props.location.search}`;
    this.props.searchArticles(query);
  }

  render() {
    const urlSearchParams = new URLSearchParams(this.props.location.search);
    const [key, value] = [...urlSearchParams.entries()][0];

    const { isLoading, searchData } = this.props.articlesSearchResults;
    if (!Object.keys(searchData).length) return <TopBarProgress />;
    if (!searchData.searchResults.length) {
      return (
        <h2 className="text-center mt-5">Couldn't find articles matching your search</h2>
      );
    }
    return (
      <Fragment>
        <div className="search-results-page">
          <div className="text-center h2 mt-4">
            <i>
              Showing {searchData.searchResults.length} results for {key !== 'q' && key} "
              {value}"
            </i>
          </div>
          <hr />
          <div className="search-results-container">
            {isLoading && <TopBarProgress />}
            {searchData.searchResults.map((article, index) => (
              <SearchResultsCard key={index} article={article} />
            ))}
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

ArticlesSearchPage.propTypes = {
  articlesSearchResults: PropTypes.object,
  searchArticles: PropTypes.func,
  location: PropTypes.object
};

const mapStateToProps = state => ({
  articlesSearchResults: state.articlesSearchResults
});

export default connect(
  mapStateToProps,
  { searchArticles }
)(ArticlesSearchPage);
