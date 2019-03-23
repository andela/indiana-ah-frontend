import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
// import { WithContext as ReactTags } from 'react-tag-input';
import { Circle } from 'better-react-spinkit';
import { PropTypes } from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import TagsInput from 'react-tagsinput';
// import AutosizeInput from 'react-input-autosize';
import createUserArticle from '../redux/actions/articleActions/createArticleAction';
import Button from '../styles/styledComponents/Button.jsx';
import 'react-tagsinput/react-tagsinput.css';

export class CreateArticle extends Component {
  state = {
    articleBody: '',
    tags: [],
    articleTitle: '',
    image: null,
    tag: '',
    displayImage: null,
    errors: {}
  };

  onChange = (value) => {
    this.setState({ articleBody: value });
  };

  handleImageUpload = (event) => {
    this.setState({
      image: event.target.files[0],
      displayImage: URL.createObjectURL(event.target.files[0])
    });
  };

  handleArticleValidation = (articleTitle, articleBody, tags) => {
    const errors = {};
    let articleIsValid = true;
    if (articleTitle.length < 5) {
      articleIsValid = false;
      errors.articleTitle = '*Article Title must be at least 5 character long';
    }

    if (articleBody.length < 20) {
      articleIsValid = false;
      errors.articleBody = '*Article body must be of length geater than 20';
    }
    if (tags !== '') {
      if (tags.length < 2) {
        articleIsValid = false;
        errors.tags = '*Tag must be of length greater than or equal to 2';
      }
    }
    this.setState({
      errors
    });
    return articleIsValid;
  };

  handleAddition = (tags) => {
    this.setState({ errors: {}, tags });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      errors: {},
      [name]: value
    });
  };

  handleImageDelete = (event) => {
    event.preventDefault();
    this.setState({
      image: null,
      displayImage: null
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    const { tags } = data;
    const joinedTags = tags.join();

    data.tags = joinedTags;
    const formData = new FormData();
    if (this.handleArticleValidation(data.articleTitle, data.articleBody, data.tags)) {
      if (data.image) formData.append('image', data.image);
      formData.append('articleTitle', data.articleTitle);
      if (!data.tags === '') formData.append('tags', data.tags);
      formData.append('articleBody', data.articleBody);

      this.props.createUserArticle(formData, this.props);
    }
  };

  render() {
    const { articleTitle, tags, displayImage } = this.state;
    const { isLoading } = this.props.articles;
    return (
      <div className="text-editor">
        <form onSubmit={this.onSubmit}>
          <textarea
            rows="1"
            cols="50"
            name="articleTitle"
            value={articleTitle}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <div className="errorMsg">{this.state.errors.articleTitle}</div>
          <div className="article-button">
            <div className="image-button">
              <label htmlFor="image">
                <i className="fa fa-upload" />{' '}
                <span>Attach a cover picture (Optional)</span>
                <input
                  id="image"
                  type="file"
                  image=""
                  name="image"
                  className="input"
                  onChange={this.handleImageUpload}
                  accept="image/*"
                />
              </label>
            </div>
            {displayImage ? (
              <span>
                <i className="fa fa-times" onClick={this.handleImageDelete} />
              </span>
            ) : null}
          </div>
          {displayImage ? (
            <div className="image-div">
              <img className="upload-image" src={displayImage} />
            </div>
          ) : null}
          <ReactQuill
            onChange={this.onChange}
            modules={CreateArticle.modules}
            formats={CreateArticle.formats}
            placeholder={'Tell your Story....'}
            className="react-quil"
          />
          <div className="errorMsg">{this.state.errors.articleBody}</div>
          <div className="section-preview chips">
            <span className="tag">Tags</span>
            <TagsInput
              value={tags}
              onChange={this.handleAddition}
              focusedClassName="tag-input-focus"
            />
            <div className="errorMsgtag">{this.state.errors.tags}</div>
          </div>

          <Button bgColor className="article-submit" disabled={isLoading}>
            <i className="fas fa-pen" />
            Publish
            {isLoading && (
              <span style={{ float: 'right', padding: '3px 3px 0 10px' }}>
                <Circle color={'#FFFFFF'} />
              </span>
            )}
          </Button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  articles: state.articles
});
CreateArticle.propTypes = {
  isLoading: PropTypes.bool,
  createUserArticle: PropTypes.func,
  articles: PropTypes.object
};
export default connect(
  mapStateToProps,
  { createUserArticle }
)(CreateArticle);

CreateArticle.modules = {
  toolbar: [
    [{ font: [] }],
    ['bold', 'italic', 'underline'], // toggled buttons
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent text direction
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
    ['link']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill CreateArticle formats
 */
CreateArticle.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'background',
  'list',
  'align',
  'direction',
  'bullet',
  'indent',
  'link',
  'code',
  'size',
  'color'
];
