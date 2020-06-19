import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.onClickSearch();
    event.preventDefault();
  }

  render() {
    const { searchText, textChange } = this.props;
    return (
      <form>
        <input
          data-testid="query-input"
          type="text"
          name="searchText"
          value={searchText}
          onChange={textChange}
        />
        <button onClick={this.handleSearch} data-testid="query-button">
          buscar
        </button>
      </form>
    );
  }
}

export default SearchBar;
