import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import PropTypes from 'prop-types';
import CardComponent from '../common/CardComponent';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  530: { items: 2 },
  840: { items: 3 },
  1024: { items: 4 }
};

const IndexCarousel = ({ articles }) => {
  const galleryItems = () => articles.map((article, index) => (
      <CardComponent
        key={index}
        img={article.imageUrl}
        commentCount={20}
        likeCount={article.likes}
        dislikeCount={article.dislikes}
        title={article.articleTitle}
        text={`${article.articleBody.slice(0, 150)}...`}
      />
  ));

  return (
    <AliceCarousel
      items={galleryItems()}
      duration={400}
      autoPlay={true}
      startIndex={1}
      fadeOutAnimation={true}
      mouseDragEnabled={true}
      playButtonEnabled={false}
      autoPlayInterval={2000}
      autoPlayDirection="rtl"
      swipeDisabled={true}
      responsive={responsive}
      disableAutoPlayOnAction={true}
      onSlideChange={() => {}}
      onSlideChanged={() => {}}
    />
  );
};

IndexCarousel.propTypes = {
  articles: PropTypes.array
};

export default IndexCarousel;
