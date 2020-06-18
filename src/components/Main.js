import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.textChange = this.textChange.bind(this);
  }

  textChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} textChange={this.textChange} />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Main;
