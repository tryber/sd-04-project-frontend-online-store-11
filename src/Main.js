import React, { Component } from 'react';
import SearchBar from './Searchbar';
import Category from './Category';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} />
        <Category />
      </div>
    );
  }
}

export default Main;
