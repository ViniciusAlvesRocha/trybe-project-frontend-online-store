export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(...rest) {
  let response;
  if (rest.length === 2) {
    const [categoryId, query] = rest;
    // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe /* * /
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  } else {
    const [query] = rest;
    response = await fetch(`https://api.mercadolibre.com/items/${query}`);
  }
  const result = await response.json();
  return result;
}
