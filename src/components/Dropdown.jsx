import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Dropdown extends React.Component {
  state = {
    displayMenu: false
  };

  showDropdownMenu = (event) => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  };

  render() {
    const { signOutUser } = this.props;
    return (
      <div className="dropdown">
        <i className="fas fa-caret-down" onClick={this.showDropdownMenu} />
        {this.state.displayMenu ? (
          <ul>
            <Link to="/">
              <li>Profile</li>
            </Link>
            <hr />
            <Link to="/article/create">
              <li>Create Article</li>
            </Link>
            <hr />
            <Link to="/">
              <li>My Article</li>
            </Link>
            <hr />
            <Link
              to="/"
              onClick={() => {
                signOutUser();
              }}
            >
              <li>Logout</li>
            </Link>
          </ul>
        ) : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  signOutUser: PropTypes.func
};
export default Dropdown;
