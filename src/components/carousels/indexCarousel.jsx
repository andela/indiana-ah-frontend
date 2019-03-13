import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import CardComponent from '../common/CardComponent';


class IndexCarousel extends Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
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
          text: `If you are going to use a passage of Lorem Ipsum, you need to
            be sure there isnt anything embarrassing hidden in the middle of text.`,
          likeCount: 2,
          dislikeCount: 2,
          commentCount: 2
        },
        {
          img: 'https://avatars0.githubusercontent.com/u/38977569?s=400&v=4',
          title: 'lkjhljugyghjh',
          text: `If you are going to use a passage of Lorem Ipsum,
            you need to be sure there isnt anything embarrassing hidden
            in the middle of text.`,
          likeCount: 2,
          dislikeCount: 2,
          commentCount: 2
        }
      ]
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(20),
      });
    }, 100);
  }

  createChildren = n => range(n).map(i => <div key={i} style=
    {{ height: 200, background: '#333' }}>{i}</div>);

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });


  render() {
    const {
      activeItemIndex,
      children,
      featuredArticle,
    } = this.state;
    return <ItemsCarousel
      // Placeholder configurations
      enablePlaceholder
      numberOfPlaceholderItems={5}
      minimumPlaceholderTime={1000}
      placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

      // Carousel configurations
      numberOfCards={3}
      gutter={12}
      showSlither={true}
      firstAndLastGutter={true}
      freeScrolling={false}

      // Active item configurations
      requestToChangeActive={this.changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={'center'}

      chevronWidth={24}
      rightChevron={'>'}
      leftChevron={'<'}
      outsideChevron={false}
    >
      children = {
        <div className="card-container">
          {featuredArticle.map((eachCard, index) => <CardComponent
            key={index}
            img={eachCard.img}
            color={eachCard.color}
            commentCount={eachCard.commentCount}
            likeCount={eachCard.likeCount}
            dislikeCount={eachCard.dislikeCount}
            title={eachCard.title}
            text={eachCard.text}
          />)}
        </div>
      }
  );
    </ItemsCarousel>;
  }
}

export default IndexCarousel;
