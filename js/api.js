

//Api call all products
const apiAllProductsUrl = "https://api.noroff.dev/api/v1/rainy-days";


export async function getProducts() {
    const response = await fetch(apiAllProductsUrl);
    const result = await response.json();
    return result;
    }
getProducts();

//Api call single products by id



