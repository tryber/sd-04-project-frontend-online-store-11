import React from 'react';
import SearchBar from './SearchBar';

class SearchBarContent extends React.Component {
  constructor(props) {
    super(props);
    this.onClickSearch = this.onClickSearch.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  onClickSearch(event) {
    this.props.onClickSearch(event);
    event.preventDefault();
  }

  textChange(event) {
    this.props.textChange();
    event.preventDefault();
  }

  render() {
    const { searchText } = this.props;
    return (
      <div>
        <p>Test Searchbar content</p>
        <SearchBar
          searchText={searchText}
          textChange={this.textChange}
          onClickSearch={this.onClickSearch}
        />
      </div>
    );
  }
}

export default SearchBarContent;
