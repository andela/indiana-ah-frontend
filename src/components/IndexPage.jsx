import React, { Fragment, Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import Footer from './common/footer.jsx';
import Button from '../styles/styledComponents/Button.jsx';
import IndexForm from './forms/indexForm.jsx';
import IndexCarousel from './carousels/indexCarousel.jsx';

class IndexPage extends Component {
  state = {
    name: 'Indiana',
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

  render() {
    const { reviews } = this.state;
    return (
      <Fragment>
        <div className='container'>
          <Row className='banner'>
            <Col className='d-flex align-items-center'>
              <div>
                <h1 className='w-80'>Share Your Thoughts With The World</h1>
                <p className='banner-p'>There is no limit to what you can
                  achieve with a pen..
                  Write, the world is ready to read.
                </p>
                <Button bgColor>Get Started</Button>
              </div>
            </Col>
            <Col>
              <SVG src='../src/assets/images/svg/banner_image.svg'></SVG>
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
                    <SVG src='../src/assets/images/svg/quotes.svg'></SVG>
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
          <IndexCarousel />
        </section>
        <section className='new-articles container-fluid'>
          <h1>New articles</h1>
          <IndexCarousel />
        </section>
        <section className='container'>
          <Row className='banner'>
            <Col>
              <SVG src='../src/assets/images/svg/banner_image2.svg'></SVG>
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
            <Col md={7} className='img-div p-0'>
              <img src='../src/assets/images/index_img.jpg' className='banner-img' />
            </Col>
          </Row>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default IndexPage;
