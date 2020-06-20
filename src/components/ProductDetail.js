import React, { Component } from 'react';
import ProductSpecs from './ProductSpecs';

class ProductDetail extends Component {
  render() {
    const { especificacoes } = this.props;
    const { title, price, imageProduct } = this.props;
    return (
      <section>
        <div>
          <img src={imageProduct} alt={title} />
        </div>
          <h1>{title} - R${price}</h1>
        <div>
          <h3>Especificações Técnicas</h3>
          {especificacoes.map((specs) => <ProductSpecs key={specs.title} especificacao={specs} />)}
        </div>
      </section>

    );
  }
}

export default ProductDetail;
