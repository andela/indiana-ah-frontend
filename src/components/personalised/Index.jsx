import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardComponent from '../common/CardComponent';

class PersonalisedViewComponent extends Component {
  state = {
    mostLikedArticle: [
      {
        img:
          'https://images.unsplash.com/photo-1505262744895-ac5705911f6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80',
        title: 'lkjhljugyghjh',
        text:
          'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        likeCount: 2,
        dislikeCount: 2,
        commentCount: 2
      },
      {
        img:
          'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        title: 'lkjhljugyghjh',
        text:
          'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
        likeCount: 2,
        dislikeCount: 2,
        commentCount: 2
      }
    ]
  };

  render() {
    let finalView;
    const allArticles = JSON.parse(localStorage.getItem('all articles'));
    const threeRandomArticles = allArticles.sort(() => 0.5 - Math.random()).slice(0, 3);
    const { mostLikedArticle } = this.state;

    return (
      <React.Fragment>
        <main className="container personalised">
          <section className="top-read-container top-read-container-styles">
            <div className="row mx-0">
              <div className="col-md-9 top-read-image-container px-0">
                <img
                  className="top-read-img "
                  src="https://images.unsplash.com/photo-1512808832507-c75aec26ebed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                />
              </div>
              <div className="col-md-3 top-read-text-padding">
                <p className="text-center"> Top Read Of the Day </p>
                <h2 className="text-center">Women In Tech</h2>
                <div className="top-read-main-text">
                  For 50 years, WWF has been protecting the future of nature. The leading
                  conservation organization, WWF works in 100 countries and is supported
                  by 1.2 million members in the United States and close to 5 million
                  globally
                </div>
              </div>
            </div>
          </section>

          <section className="most-like-section">
            <h1 className="mb-4 card-title-size"> Most Popular Articles </h1>
            <div className="card-container mb-5 mt-2">
              {mostLikedArticle.map((eachCard, index) => (
                <CardComponent
                  key={index}
                  img={eachCard.img}
                  color={eachCard.color}
                  commentCount={eachCard.commentCount}
                  likeCount={eachCard.likeCount}
                  dislikeCount={eachCard.dislikeCount}
                  title={eachCard.title}
                  text={eachCard.text}
                />
              ))}
              <div className="popular-bookmarked">
                <div className="h-50 mb-5">
                  <h3 className="mb-4">Popular Articles</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">First item</li>
                    <li className="list-group-item">Second item</li>
                    <li className="list-group-item">Third item</li>
                    <li className="list-group-item">Fourth item</li>
                  </ul>
                </div>
                <div className="h-50">
                  <h3 className="mb-4">Bookmark Articles</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">First item</li>
                    <li className="list-group-item">Second item</li>
                    <li className="list-group-item">Third item</li>
                    <li className="list-group-item">Fourth item</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="featured-articles-section">
            <h1 className="mb-4 card-title-size"> Featured articles </h1>
            <div className="card-container mb-5 mt-2">
              {threeRandomArticles.length === 0 ? (
                <h3>There Are No Featured Articles</h3>
              ) : (
                threeRandomArticles.map((eachCard, index) => (
                  <CardComponent
                    key={index}
                    img={eachCard.imageUrl}
                    color={eachCard.color}
                    commentCount={0}
                    likeCount={eachCard.likes}
                    dislikeCount={eachCard.dislikes}
                    title={`${eachCard.articleTitle.slice(0, 20)}...`}
                    text={`${eachCard.articleBody.slice(0, 160)}...`}
                  />
                ))
              )}
            </div>
          </section>

          <section className="bookmarked-articles-section">
            <h1 className="card-title-size mb-4"> Bookmarked articles </h1>
            <div className="card-container mb-5 mt-2">
              <h3> You currently do not have any bookmarked Article </h3>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps)(PersonalisedViewComponent);
