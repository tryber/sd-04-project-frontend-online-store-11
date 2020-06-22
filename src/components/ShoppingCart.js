import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const { cartProducts, count } = this.props;
    if (cartProducts.length === 0) {
      return (
        <div>
          <h1>Carrinho de compras</h1>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <p data-testid="shopping-cart-product-quantity">quantidade de produtos no seu carinho: {count}</p>
        {cartProducts.map(product => (
          <div data-testid="shopping-cart-product-name" key={product.id}>
            <p>{product.id}</p>
            <p>{product.selectedProduct.title}</p>
            <img src={product.selectedProduct.thumbnail} alt={product.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
