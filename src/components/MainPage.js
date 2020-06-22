import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Categories from './Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import * as api from '../services/api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: '',
      categories: '',
      selectedCategory: '',
    };
    this.textChange = this.textChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSelectedOptionChange = this.onSelectedOptionChange.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ categories }));
    // api.getProductsFromCategoryAndQuery(this.state.selectedCategory, this.state.searchText).
    // then(products =>
    //   this.setState({ products }),
    // );
  }

  onSelectedOptionChange(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  textChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    getProductsFromCategoryAndQuery('', this.state.searchText).then((products) =>
      this.setState({ products }),
    );
  }

  render() {
    const { searchText, selectedCategory, categories, products } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          textChange={this.textChange}
          onClickSearch={this.handleClick}
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categories
          selectedCategory={selectedCategory}
          categories={categories}
          onChangeOption={this.onSelectedOptionChange}
        />
        <ProductList products={products} />

      </div>
    );
  }
}

export default MainPage;
