//Api call all products

const apiUrl = "https://api.noroff.dev/api/v1/rainy-days";

const getJacketInfo = document.querySelectorAll(".products");


export async function getProducts() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
}

