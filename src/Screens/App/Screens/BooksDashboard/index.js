import React, { Component } from 'react';
import SearchBar from './Screens/SearchBar';
import BookList from './Screens/BookList';

class BooksDashboard extends Component {
	
  constructor() {
    super();

    this.state = {
      filterType: "",
      filter: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({[name]: e.target.value});
  }

	render() {
		return (
			<div className="app">
        <SearchBar filterType={this.state.filterType} filter={this.state.filter} onChange={this.handleChange} />
        <BookList filterType={this.state.filterType} filter={this.state.filter} />
			</div>
		);
	}

}

export default BooksDashboard;
