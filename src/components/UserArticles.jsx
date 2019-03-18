import React, { Component } from 'react';
import UserArticleCardComponent from './common/UserArticleCardComponent';

class UserArticles extends Component {
  state = {
    userArticles: [
      {
        img: 'https://avatars1.githubusercontent.com/u/22154654?s=460&v=4',
        articleTitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        tags: 'Eat, Code, sleep, Repeat',
        followersCount: 3,
        userName: 'Dozie',
        likeCount: 2,
        dislikeCount: 3,
        commentCount: 5,
        timeCount: 'false'
      }
    ]
  };

  render() {
    const { userArticles } = this.state;
    return userArticles.map((article, index) => (
      <UserArticleCardComponent
        key={index}
        img={article.img}
        articleTitle={article.articleTitle}
        tags={article.tags}
        followersCount={article.followersCount}
        userName={article.userName}
        likeCount={article.likeCount}
        dislikeCount={article.dislikeCount}
        commentCount={article.commentCount}
        timeCount={article.timeCount}
      />
    ));
  }
}

export default UserArticles;
