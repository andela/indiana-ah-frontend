import React, { Fragment, Component } from 'react';
import Footer from './common/footer.jsx';

class IndexPage extends Component {
  state = {
    name: 'Indiana'
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <h2>Welcome to Author&apos;s Haven! {this.state.name}</h2>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default IndexPage;
