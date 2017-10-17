import React, { Component } from 'react';

import DashboardContainer from './components/DashboardContainer';

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
      <DashboardContainer
        filter={this.state.filter}
        filterType={this.state.filterType}
        handleChange={this.handleChange}
      />
    );
  }
}

export default BooksDashboard;
