import React, { Fragment, Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../styles/styledComponents/Button.jsx';
import IndexForm from './forms/indexForm.jsx';
import getAllArticles from '../redux/actions/articleActions/articleActions';
import { filterArticlesByLikes, filterArticlesByDate } from '../utils/index';
import IndexCarousel from './carousels/indexCarousel.jsx';
import {
  BannerImage, BannerImage2, quotes, indexImage
} from '../assets/images/svg';

class IndexPage extends Component {
  state = {
    reviews: [
      {
        name: 'Tiku Okoye',
        review: `Author’s haven indeed lives up to its name.
          It has been a source of succor and comfort to me.
          In here I have found individuals of like mind as I and
          I have also gained inspiration and motivation.
          The author’s haven team are also very efficient, professional 
          and prompt with their responses.`,
        location: 'California'
      },
      {
        name: 'Dozie Nwoga',
        review: `Author’s haven indeed lives up to its name.
          It has been a source of succor and comfort to me.
          In here I have found individuals of like mind as I and
          I have also gained inspiration and motivation.
          The author’s haven team are also very efficient, professional 
          and prompt with their responses.`,
        location: 'Anambra'
      },
      {
        name: 'Ozone Ezenwa',
        review: `Author’s haven indeed lives up to its name.
          It has been a source of succor and comfort to me.
          In here I have found individuals of like mind as I and
          I have also gained inspiration and motivation.
          The author’s haven team are also very efficient, professional 
          and prompt with their responses.`,
        location: 'Hawaii'
      },
    ]
  };

  componentDidMount() {
    this.props.getAllArticles();
  }


  render() {
    const { reviews } = this.state;
    const articles = this.props.articles.allArticles;
    const topArticles = filterArticlesByLikes(articles);
    const newArticles = filterArticlesByDate(articles);
    return (
      <Fragment>
        <div className='container'>
          <Row className='banner'>
            <Col className='d-flex align-items-center'>
              <div className='index-banner'>
                <h1 className='w-80'>Share Your Thoughts With The World</h1>
                <p className='banner-p'>There is no limit to what you can
                  achieve with a pen..
                  Write, the world is ready to read.
                </p>
                <Button bgColor className='index-button'>Get Started</Button>
              </div>
            </Col>
            <Col className='d-none d-sm-block'>
              <img src={BannerImage} />
            </Col>
          </Row>
        </div>
        <section className='container-fluid reviews'>
          <Row className='justify-content-center'>
            <Col lg={8} md={10}>
              <h2 className='text-center'>A community of like-minded authors fostering
                inspiration and innovation by leveraging the modern web.
              </h2>
            </Col>
          </Row>
          <Row className='text-center'>
            {
              reviews.map((item, index) => (
                <Col key={index}>
                  <p>{item.review}</p>
                  <div className='quotes'>
                    <img src={quotes} />
                  </div>
                  <p className='reviews-name'>{item.name}</p>
                  <p>{item.location}</p>
                </Col>
              ))
            }
          </Row>
        </section>
        <section className='top-articles container-fluid'>
          <h1>Top articles</h1>
          <IndexCarousel articles={topArticles} />
        </section>
        <section className='new-articles container-fluid'>
          <h1>New articles</h1>
          <IndexCarousel articles={newArticles} />
        </section>
        <section className='container'>
          <Row className='banner'>
            <Col>
              <img src={BannerImage2} />
            </Col>
            <Col className='d-flex align-items-center'>
              <div>
                <h2>Are you ready to put down those wonderful ideas?</h2>
                <p className='banner-p2'>Get Started for free today.</p>
                <Button>Get Started</Button>
              </div>
            </Col>
          </Row>
        </section>
        <section className='container-fluid'>
          <Row className='subscription'>
            <Col md={1} className='d-md-none d-lg-block'></Col>
            <Col lg={4} md={5} className='position-relative'>
              <div className='w-80 mt-10'>
                <h2>Subscribe To Our Email List</h2>
                <p className='banner-p2'>Interdum consectetur libero id faucibus nisl.
                  Risus pretium quam vulputate dignissim suspendisse in
                </p>
              </div>
              <IndexForm />
            </Col>
            <Col md={7} className='img-div p-0 d-none d-md-block'>
              <img src={indexImage} className='banner-img' />
            </Col>
          </Row>
        </section>
      </Fragment>
    );
  }
}

IndexPage.propTypes = {
  getAllArticles: PropTypes.func,
  articles: PropTypes.object,
};


const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { getAllArticles })(IndexPage);
