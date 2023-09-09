

import { displayProducts } from "./script.js";

displayProducts();


function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

async function fetchJacketDetail() {
    const JacketId = getJacketIdFromQuery();
    if (!jacketId) {
        return;
    }


const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
const jacketDetail = await response.json();

const jacketDetailContainer = document.getElementById("single_jacket_container");

jacketDetailContainer.innerHTML = `<h1> Jacket </h1>`

fetchJacketDetail ();

}















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