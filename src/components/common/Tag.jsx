import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

class Tag extends Component {
  state = {
    tags: []
  };
  handleDelete = i => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  };

  handleAddition = tag => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  };
  render() {
    const { tags } = this.state;
    return (
      <div className="section-preview chips">
        <ReactTags
          tags={tags}
          placeholder="Add Tag(s)"
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }
}
export default Tag;
