export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(...rest) {
  let response;
  const [categoryId, query] = rest;
  if (rest.length === 2) {
    // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe /* * /
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  } else if (query && categoryId === undefined) {
    response = await fetch(`https://api.mercadolibre.com/items/${query}`);
  } else {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  }
  return response.json();
}
