import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Categories from './Categories';
import ShoppingCart from './ShoppingCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { getCategories } from '../services/api';
import * as api from '../services/api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: '',
      categories: '',
      selectedCategory: '',
      cartProducts: [],
      count: 0,
    };
    this.textChange = this.textChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSelectedOptionChange = this.onSelectedOptionChange.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    const { selectedCategory, searchText } = this.state;
    api.getCategories().then(categories => this.setState({ categories }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { selectedCategory, searchText } = this.state;
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      api
        .getProductsFromCategoryAndQuery(selectedCategory, searchText)
        .then(products => this.setState({ products }));
    }
  }

  onSelectedOptionChange(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  textChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    api
      .getProductsFromCategoryAndQuery(
        this.state.selectedCategory,
        this.state.searchText,
      )
      .then(products => this.setState({ products }));
  }

  addProductToCart(product) {
    let flagExist = false;
    this.state.cartProducts.map((cartProduct, index) => {
      if (cartProduct.id === product.id) {
        flagExist = true;
        let cartProducts = [...this.state.cartProducts];
        let cartProduct = {
          ...cartProducts[index],
          quantity: cartProducts[index].quantity + 1,
        };
        cartProducts[index] = cartProduct;
        this.setState({ cartProducts });
      }
    });
    if (flagExist === false) {
      const newProduct = {
        id: product.id,
        quantity: 1,
        selectedProduct: product,
      };
      this.setState(state => {
        const cartProducts = [...state.cartProducts, newProduct];
        return { cartProducts };
      });
    }
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
        <ShoppingCart
          cartProducts={this.state.cartProducts}
          count={this.state.count}
        />
        <ProductList
          products={products}
          onClickAdd={this.addProductToCart}
          onclickIncrement={this.increment}
        />
        <Categories
          selectedCategory={selectedCategory}
          categories={categories}
          onChangeOption={this.onSelectedOptionChange}
        />
      </div>
    );
  }
}

export default MainPage;
