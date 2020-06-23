import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
      count: 0,
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductToCart = this.removeProductToCart.bind(this);
  }

  addProductToCart(product) {
    this.props.onClickAdd(product);
    this.props.onclickIncrement();
  }

  removeProductToCart(product) {
    this.props.onClickRemove(product);
    this.props.onclickDecrement();
  }

  render() {
    if (this.props.count === 0) {
      return (<p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>);
    }
    const { cartProducts } = this.props;
    return (
      <div>
        {cartProducts.map((product) => (
          <div data-testid="shopping-cart-product-name" key={product.id}>
            <p>{product.id}</p>
            <p>{product.selectedProduct.title}</p>
            <img src={product.selectedProduct.thumbnail} alt={product.title} />
            <div>
              <button
                type="button" data-testid="product-increase-quantity"
                onClick={() => this.addProductToCart(product)}
              > + </button>
              <p>{product.quantity}</p>
              <p data-testid="shopping-cart-product-quantity"> {product.quantity}
              </p>
              <button
                type="button" data-testid="product-decrease-quantity" 
                onClick={() => this.removeProductToCart(product)}
              > - </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
