import React, { Component } from 'react';
import * as api from './services/api';
import { getCategories } from './services/api';

class TestMathieu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categoriesies: '',
    };
  }

  componentDidMount() {
    // 
    getCategories().then((Categoriesies) => this.setState({ Categoriesies }));
  }

  render() {
    return (
    <p>Test Mathieu 
      
    </p>
    )}
}

export default TestMathieu;
