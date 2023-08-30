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

async function getProducts(){
  const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
  const results = await response.json();
  console.log(results); //I manage to console.log the results, but not return the results. I get 404 not found. 
}

getProducts();






//async function displayProducts(){
  //  const products = await getProducts();
    //const productsContainer = document.getElementById("products_container");
    

    //for(i =0; i < products.lenght; i++){
       // const product = products[i];
       // console.log(product);
   // }
//}

//displayProducts();