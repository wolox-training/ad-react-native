import React, { Component } from 'react';

import SearchBar from './screens/SearchBar';
import BookList from './screens/BookList';

class BooksDashboard extends Component {
  state = {
    filterType: '',
    filter: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="app">
        <SearchBar
          filterType={this.state.filterType}
          filter={this.state.filter}
          onChange={this.handleChange}
        />
        <BookList filterType={this.state.filterType} filter={this.state.filter} />
      </div>
    );
  }
}

export default BooksDashboard;
