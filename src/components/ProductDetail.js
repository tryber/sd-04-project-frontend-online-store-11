import React, { Component } from 'react';
// lembrar de data-testid="product-detail-link" no <Link> de ProductList
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    this.props.location.state.clickToAdd(product);

  } 

  render() {
    if (typeof this.props.location.propsToDetail === 'undefined') {
      return <p>No Details</p>;
    }

    const {
      title,
      price,
      thumbnail,
      attributes,
    } = this.props.location.propsToDetail.product;
    const { product } = this.props.location.propsToDetail;
    return (
      <section>
        <div>
          <p>detail</p>
          <h1 data-testid="product-detail-name">
            {title} - R${price}
          </h1>
          <img src={thumbnail} alt={title} />
        </div>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={() => this.addProductToCart(product)}
          >
            Add this item to Cart
          </button>
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <p>{attributes[0].value_name}</p>
          <p>{attributes[1].value_name}</p>
          <p>{attributes[2].value_name}</p>
        </div>
      </section>
    );
  }
}

export default ProductDetail;
