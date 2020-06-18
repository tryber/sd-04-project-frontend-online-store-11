import React, { Component } from 'react';
import SearchBar from './Searchbar';
import Category from './Category';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  textChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} textChange={this.textChange} />
        <Category />
      </div>
    );
  }
}

export default Main;
