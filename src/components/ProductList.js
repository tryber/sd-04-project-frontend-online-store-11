import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.clickToAdd = this.clickToAdd.bind(this);
  }


  clickToAdd(product) {
    this.props.onClickAdd(product);
    this.props.onclickIncrement();
  }

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
            <button data-testid="product-add-to-cart" onClick={() => this.clickToAdd(product)}>Add this item to Cart</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
