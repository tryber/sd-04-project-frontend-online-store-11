import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, textChange } = this.props;
    return (
      <form>
        <input
        type="text" name="searchText"
        value={searchText} onChange={textChange}
        />
      </form>
    );
  }
}

export default SearchBar;
