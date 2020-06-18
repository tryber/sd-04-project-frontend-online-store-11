import React, { Component } from 'react';
import SearchBar from './Searchbar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }

  render() {
    return (
      <SearchBar searchText={this.state.searchText} />
    )
  }
}

export default Main;