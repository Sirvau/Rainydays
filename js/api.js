//Api call all products
const apiAllProductsUrl = "https://api.noroff.dev/api/v1/rainy-days";


export async function getProducts() {
    const response = await fetch(apiAllProductsUrl);
    const result = await response.json();
   return result;
}


//Api call single products by id

const apiSingleProductUrl= "https://api.noroff.dev/api/v1//rainy-days/<id>";

export async function getSingleProducts() {
    const fetchResponse = await fetch(apiSingleProductUrl);
    const fetchResult = await fetchResponse.json();
    return fetchResult;
}

//Work with single parametres and how to link an id to a site. 









