import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const { title, price, thumbnail, attributes } = this.props.location.state;

    return (
      <section>
        <div>
          <h1 data-testid="product-detail-name">{title} - R${price}</h1>
          <img src={thumbnail} alt={title} />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <p>{attributes[0].id}</p>
        </div>
      </section>
    );
  }
}

export default ProductDetail;