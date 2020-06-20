import React, { Component } from 'react';

class ProductSpecs extends Component {
  render() {
    const { especificacao } = this.props;
    return (
      <p>{especificacao}</p>
    );
  }
}