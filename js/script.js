//API CALL goes here

//Hardcoded HTML index and sortiment page
//<div class = product>
//<img
//src="../images/ice_shell_jacket.png"
//alt="Product image of Ice Shell Jacket"
//class="product_image"
///>
//<p class="product_name">Ice Shell Jacket</p>
//<p class="product_price">2699,-</p>
//<a class="button_small" href="product.html">View</a>
//CTA Button
//</div>


//Hardcoded HTML product page: sizes 
//<div class="size">
//<input type="radio" name="size" value="xs" id="xs" />
//<label for="xs">XS</label>
//</div>

//Base URL API: https://api.noroff.dev/api/v1/ 




//API call function: all products

//async function getProducts(){
  //const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
  //const results = await response.json();
  //console.log(results); //I manage to console.log the results, but not return the results. I get 404 not found. 
//}

//getProducts();

const apiUrl = "https://api.noroff.dev/api/v1/rainy-days";

const getJacketInfo = document.querySelectorAll(".products");

async function getProducts() {
    const response = await fetch(apiUrl);
    const result = await response.json();
    return result;
}

async function displayJackets() {
    const jackets = await getProducts();
    const jacketsContainer = document.getElementById("jackets_container");
    
    for (i = 0; i < jackets.length; i++) {
        const jacket = jackets[i];
        //console.log(jacket);

        if(jacket.onSale){
          const jacketDiv = document.createElement("div");
          jacketDiv.classList.add("product");
          console.log(jacketDiv.outerHTML);

          const image = document.createElement("img");
          image.src = jacket.image;
          image.alt = jacket.description;

          const products = document.createElement("p");
          products.classList.add("products");
          products.innerHTML = `${jacket.title} <span class="jacketSale">${jacket.price}</span> $${jacket.discountedPrice}`;

          const button = document.createElement("a");
          button.href ="#";
          button.classList.add("button_small")
          button.textContent = "View";

          jacketsContainer.appendChild(image);
          jacketsContainer.appendChild(products);
          jacketsContainer.appendChild(button);
         
        }
    }
    }

displayJackets();




//async function displayProducts(){
  //  const products = await getProducts();
    //const productsContainer = document.getElementById("products_container");
    

    //for(i =0; i < products.lenght; i++){
       // const product = products[i];
       // console.log(product);
   // }
//}

//displayProducts();