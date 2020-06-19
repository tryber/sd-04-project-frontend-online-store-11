import React from 'react';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    if (products === '') return 'Carregando...';
    return (
      <div>
        <h1>ProductList</h1>
        {products.results.map(product => (
          <div data-testid="product" key={product.id}>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
