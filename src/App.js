// import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import PaginationComponent from './components/common/Pagination';
// import './icons/fontAwesomeIcons';

// class App extends Component {
//   state = {};
//   handlePageClick = page => {
//     this.setState({ currentPage: page });
//   };

//   componentDidMount() {
//     const urlSearchParams = new URLSearchParams(location.search);
//     const page = urlSearchParams.get('page');
//     this.setState({ currentPage: parseInt(page) });
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>
//           <div>
//             <PaginationComponent
//               numberOfPages={8}
//               currentPage={this.state.currentPage}
//               onPageClick={this.handlePageClick}
//             />
//             <Route
//               path="/"
//               component={() => <h1>Welcome to Author's haven</h1>}
//             />
//           </div>
//         </BrowserRouter>
//       </Provider>
//     );
//   }
// }

// export default App;
