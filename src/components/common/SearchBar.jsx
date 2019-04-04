import React, { Component } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
  state = {
    searchValue: '',
    filterOption: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { searchValue, filterOption } = this.state;
    const query = !filterOption ? `q=${searchValue}` : `${filterOption}=${searchValue}`;
    history.replace(`/search?${query}`);
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search-bar">
        <Form onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <select name="filterOption" onChange={this.handleChange}>
              <option value="">All</option>
              <option value="author">Author</option>
              <option value="tag">Tag</option>
              <option value="title">Title</option>
            </select>
            <Form.Control
              placeholder="Search Articles"
              name="searchValue"
              value={searchValue}
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
              required
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2" onClick={this.handleSubmit}>
                <i className="fa fa-search" />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export { SearchBar };

export default withRouter(SearchBar);