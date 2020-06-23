import React, { Component } from 'react';
// lembrar de data-testid="product-detail-link" no <Link> de ProductList
class ProductDetail extends Component {
  render() {

    if (typeof this.props.location.propsToDetail === 'undefined') {
console.log('undifend')
      return <p>Details</p>;

    }

    const {
      title,
      price,
      thumbnail,
      attributes,
    } = this.props.location.propsToDetail.state;
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
