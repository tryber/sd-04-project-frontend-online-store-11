import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const { title, price, imageProduct, especificacao } = this.props;
    return (
      <section>
        <div>
          <h1 data-testid="product-detail-name">{title} - R${price}</h1>
          <img src={imageProduct} alt={title} />
        </div>   
        <div>
          <h3>Especificações Técnicas</h3>
          <p>{especificacao}</p>
        </div>
      </section>
    );
  }
}

export default ProductDetail;
