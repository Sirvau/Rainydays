

import { displayProducts } from "./script.js";

displayProducts();

const detailContainer = document.querySelector(".container");

const url = "https://api.noroff.dev/api/v1/rainy-days/";

async function fetchJacketDetail() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);
    }

    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

}

fetchJacketDetail();



function createHTML(details) {
    detailContainer.innerHTML = `<img> ${details.image}</img>
                                 <h1 class= headline_medium>${details.title}</h1>
                                 <p> ${details.description} </p>
                                 <p> ${details.price}</p>
                                 `
}

createHTML();

















//<section id="single_jacket_container" class="container">
//<h1 class="headline_medium">Ice Shell jacket</h1>
//<p>
//Versatile, weather protective and fully equipped shell jacket for
  //women.
//</p>
//<p>Made for all kinds of adventures in forests and mountains.</p>
//</section>
//</div>
//<section class="container">
//<div class="product"></div>
//<div>
//<div class="size">
//</div>
//<div class="size">
//</div>
//<div class="size">
//</div>
//<div class="size">
//</div>
//<div class="size">
//</div>
//</section>
//<div>
//<a class="button_medium" href="shoppingbag.html">Add to bag</a>
//</div>