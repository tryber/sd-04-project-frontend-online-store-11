import React, { Component } from 'react';

class Categories extends Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    this.props.onChangeOption(event);
  }

  render() {
    const { categories, selectedCategory } = this.props;
    if (categories === '') return 'Carregando...';
    return (
      <div>
        <h1>Categories</h1>
        <div>
          {categories.map((category) => (
            <div>
              <label data-testid="category" htmlFor={category.name}>
                <input
                  type="radio"
                  value={category.name}
                  checked={selectedCategory === category.name}
                  onChange={this.onValueChange}
                />
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
