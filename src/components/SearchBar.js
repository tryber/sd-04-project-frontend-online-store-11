import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onClickSearch = this.onClickSearch.bind(this);
  }

  onClickSearch(event) {
    this.props.onClickSearch(event);
    event.preventDefault();
  }

  render() {
    const { searchText, textChange } = this.props;
    return (
      <div>
        <form>
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            value={searchText}
            onChange={textChange}
          />
          <button
            type="button"
            onClick={this.onClickSearch}
            data-testid="query-button"
          >
            buscar
          </button>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.{' '}
        </p>
      </div>
    );
  }
}

export default SearchBar;
