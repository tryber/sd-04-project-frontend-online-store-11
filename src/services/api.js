export async function getCategories() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/categories`;
  let myInit = { method: 'GET', mode: 'cors', cache: 'default' };
  const categories = await fetch(url, myInit).then(res => res.json());
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
