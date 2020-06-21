export async function getCategories() {
  const url =
    // 'https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/categories';
    'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(url).then((res) => res.json());
  console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const url = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const products = await fetch(url).then((res) => res.json());
  console.log(products)
  return products;
}
