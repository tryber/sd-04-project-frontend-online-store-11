import React from 'react';
import SearchBar from './SearchBar';

class SearchBarContent extends React.Component {
  constructor(props) {
    super(props);
    // this.onClickSearch = this.onClickSearch.bind(this);
    // this.textChange = this.textChange.bind(this);
  }

  // onClickSearch() {
  //   this.props.onClickSearch();
  //   // event.preventDefault();
  // }

  // textChange(event) {
  //   this.props.textChange(event);
  //   event.preventDefault();
  // }

  render() {
    const { searchText } = this.props;
    return (
      <div>
        <p>Test Searchbar content</p>
        <SearchBar
          searchText={searchText}
          textChange={this.props.textChange}
          onClickSearch={this.props.onClickSearch}
        />
      </div>
    );
  }
}

export default SearchBarContent;
