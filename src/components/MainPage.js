import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import { getCategories } from '../services/api';
import { getProductsFromCategoryAndQuery } from '../services/api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: '',
      categories: '',
    };
    this.textChange = this.textChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  textChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    getProductsFromCategoryAndQuery('', this.state.searchText).then(products =>
      this.setState({ products }),
    );

    console.log(this.state.products);
  };

  componentDidMount() {
    getCategories().then(categories => this.setState({ categories }));
    getProductsFromCategoryAndQuery().then(products =>
      this.setState({ products }),
    );
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          textChange={this.textChange}
          onClickSearch={this.handleClick}
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default MainPage;
