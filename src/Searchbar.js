import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, textChange } = this.props;
    return (
      <form>
        <label htmlFor="searchText">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <input
          type="text" name="searchText"
          value={searchText} onChange={textChange}
        />
      </form>
    );
  }
}

export default SearchBar;
