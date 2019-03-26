import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Dropdown extends React.Component {
  state = {
    displayMenu: false
  };

  showDropdownMenu = (event) => {
    event.preventDefault();
    if (!this.state.displayMenu) {
      this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
      });
    }
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
        <i className="fa fa-caret-down" onClick={this.showDropdownMenu} />
        {this.state.displayMenu && (
          <ul>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/article/create">Create Article</Link>
            </li>
            <li>
              <Link to="/">My Article </Link>
            </li>

            <li>
              {' '}
              <Link
                to="/"
                onClick={() => {
                  signOutUser();
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  signOutUser: PropTypes.func
};
export default Dropdown;
