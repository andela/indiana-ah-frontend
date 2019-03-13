/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import CardComponent from '../common/CardComponent';
import 'react-alice-carousel/lib/alice-carousel.css';

class IndexCarousel extends Component {
  state = {
    featuredArticle: [
      {
        img: 'https://avatars0.githubusercontent.com/u/38977569?s=400&v=4',
        title: 'lkjhljugyghjh',
        text: `Lorem Ipsum has been the industry standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.`,
        likeCount: 2,
        dislikeCount: 2,
        commentCount: 2
      },
      {
        img: 'https://avatars0.githubusercontent.com/u/38977569?s=400&v=4',
        title: 'lkjhljugyghjh',
        text: `Lorem Ipsum has been the industry standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.`,
        likeCount: 2,
        dislikeCount: 2,
        commentCount: 2
      },
      {
        img: 'https://avatars0.githubusercontent.com/u/38977569?s=400&v=4',
        title: 'lkjhljugyghjh',
        text: `Lorem Ipsum has been the industry standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.`,
        likeCount: 2,
        dislikeCount: 2,
        commentCount: 2
      },
      {
        img: 'https://avatars0.githubusercontent.com/u/38977569?s=400&v=4',
        title: 'lkjhljugyghjh',
        text: `Lorem Ipsum has been the industry standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.`,
        likeCount: 2,
        dislikeCount: 2,
        commentCount: 2
      },
      {
        img: 'https://avatars0.githubusercontent.com/u/38977569?s=400&v=4',
        title: 'lkjhljugyghjh',
        text: `Lorem Ipsum has been the industry standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.`,
        likeCount: 2,
        dislikeCount: 2,
        commentCount: 2
      },
    ]
  }

  responsive = {
    0: { items: 1 },
    256: { items: 2 },
    512: { items: 3 },
    1024: { items: 4 },
  };

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  galleryItems() {
    return (
      this.state.featuredArticle.map((eachCard, index) => <CardComponent
        key={index}
        img={eachCard.img}
        color={eachCard.color}
        commentCount={eachCard.commentCount}
        likeCount={eachCard.likeCount}
        dislikeCount={eachCard.dislikeCount}
        title={eachCard.title}
        text={eachCard.text}
      />)
    );
  }

  render() {
    const items = this.galleryItems();

    return (
      <AliceCarousel
        items={items}
        duration={400}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        swipeDisabled={true}
        responsive={this.responsive}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    );
  }
}


export default IndexCarousel;
