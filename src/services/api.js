export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery() {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe /* categoryId, query* /
}
