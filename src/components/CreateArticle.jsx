import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import { WithContext as ReactTags } from 'react-tag-input';
import { Circle } from 'better-react-spinkit';
import { PropTypes } from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import createUserArticle from '../redux/actions/articleActions/createArticleAction';
import Button from '../styles/styledComponents/Button.jsx';

export class CreateArticle extends Component {
  state = {
    articleBody: '',
    tags: [],
    articleTitle: '',
    imageUrl: null
  };

  onChange = (value) => {
    this.setState({ articleBody: value });
  };

  handleImageUpload = (event) => {
    this.setState({
      imageUrl: URL.createObjectURL(event.target.files[0])
    });
  };

  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  };

  handleAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleImageDelete = (event) => {
    event.preventDefault();
    this.setState({
      imageUrl: ''
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const data = { ...this.state };
    const { tags } = data;
    const joinedTags = tags.map(e => e.text).join(',');
    data.tags = joinedTags;
    const article = {
      articleBody: data.articleBody,
      tags: data.tags,
      articleTitle: data.articleTitle,
      imageUrl: data.imageUrl
    };
    this.props.createUserArticle(article, this.props);
  };

  render() {
    const { imageUrl, articleTitle, tags } = this.state;
    const { isLoading } = this.props.articles;
    return (
      <div className="text-editor">
        <form>
          <textarea
            rows="1"
            cols="50"
            name="articleTitle"
            value={articleTitle}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <div className="article-button">
            <div className="image-button">
              <label htmlFor="image">
                <i className="fa fa-upload" />{' '}
                <span>Attach a cover picture (Optional)</span>
                <input
                  id="image"
                  type="file"
                  className="input"
                  onChange={this.handleImageUpload}
                  accept="image/*"
                />
              </label>
            </div>
            {imageUrl ? (
              <span>
                <i className="fa fa-remove" onClick={this.handleImageDelete} />
              </span>
            ) : null}
          </div>
          <div className="image-div">
            <img className="upload-image" src={this.state.imageUrl} />
          </div>
          <ReactQuill
            onChange={this.onChange}
            modules={CreateArticle.modules}
            formats={CreateArticle.formats}
            placeholder={'Tell your Story....'}
            className="react-quil"
          />
          <div className="section-preview chips">
            <ReactTags
              tags={tags}
              placeholder="Add Tags"
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              handleTagClick={this.handleTagClick}
            />
          </div>
          <Button
            bgColor
            className="article-submit"
            onClick={this.onSubmit}
            disabled={isLoading}
          >
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
