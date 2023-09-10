



function getJacketTitleFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    return title;
}


function getJacketIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    return id;
}


async function fetchJacketDetail() {
    const jacketId = getJacketIdFromQuery();
    const jacketTitle = getJacketTitleFromQuery();
    if (!jacketId) {
        throw new Error("Unfortunately an error occured when loading the jacket");

    }

    try {

        const response = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${jacketId}`);
        if(!response.ok) {
            throw new Error("Unfortunately an error occured when loading the jacket");
        }
        const jacketDetail = await response.json();

        const singleJacketContainer = document.createElement("div");
        singleJacketContainer.classList.add("single_jacket_container");

        const image = document.createElement("img");
        image.src = singleJacketContainer.image;
        image.alt = singleJacketContainer.description;

        const titleOfJacket = document.createElement("p");
        titleOfJacket.classList.add("product_name");
        titleOfJacket.innerHTML = `${jacket.title}`;

        const descriptionOfJacket = document.createElement("p");
        descriptionOfJacket.classList.add("product_name");
        descriptionOfJacket.innerHTML = `${jacket.description}`;

        const priceOfJacket = document.createElement("p");
        priceOfJacket.classList.add("product_price");
        priceOfJacket.innerHTML = `<span class="product_price">$${jacket.price}</span>`;
        
        const button = document.createElement("a");
            button.href = "`/shoppingbag.html;" 
            button.classList.add("button_large");
            button.textContent = "View";

            
            singleJacketContainer.appendChild(image);
            singleJacketContainer.appendChild(titleOfJacket);
            singleJacketContainer.appendChild(descriptionOfJacket);
            singleJacketContainer.appendChild(priceOfJacket);
            singleJacketContainer.appendChild(button);


        //const singleJacketContainer = document.getElementById("single_jacket_container");

    }
    catch (error) {
        showError(error.message);
    }

}

fetchJacketDetail()













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