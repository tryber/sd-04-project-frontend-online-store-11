import React, { Component } from 'react';
import { getCategories } from './services/api';

class TestMathieu extends Component {
  constructor(props) {
    super(props);
    this.state = { categorias: '' };
  }

  componentDidMount() {
    getCategories().then((categorias) => this.setState({ categorias }));
  }

  render() {
    return <p>Test Mathieu</p>;
  }
}

export default TestMathieu;
