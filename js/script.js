
import { getProducts } from "./api.js";


//Display jackets and information on site

let i = 0;

async function displayProducts() {
    const jacketsInfo = await getProducts();
    const jacketsContainer = document.getElementById("jackets_container");

    
    for (i = 0; i < jacketsInfo.length; i++) {
        const jacket = jacketsInfo[i];
        
        

        if (jacket.onSale) {
            const jacketDiv = document.createElement("div");
            jacketDiv.classList.add("jacket"); 

            const image = document.createElement("img");
            image.src = jacket.image;
            image.alt = jacket.description;

            const jacketTitle = document.createElement("p");
            jacketTitle.classList.add("product_name");
            jacketTitle.innerHTML = `${jacket.title}`

            const jacketPrice = document.createElement("p");
            jacketPrice.classList.add("product_price");
            jacketPrice.innerHTML = `<span class="jacketSale">${jacket.price}</span> ${jacket.discountedPrice}`;


            if (jacket.id) {
                const jacketDetails = document.createElement("a");
                jacketDetails.classList.add("button_small");
                jacketDetails.addEventListener("click", () => {
                    window.location.href = `product.html?id=${jacket.id}`;
                });
            }

            const button = document.createElement("a");
            button.href = "http://127.0.0.1:5500/html/product.html";   // I think the link to the productpage with a uniqe jacket-Id is going here
            button.classList.add("button_small");
            button.textContent = "view";


            jacketsContainer.appendChild(image);
            jacketsContainer.appendChild(jacketTitle)
            jacketsContainer.appendChild(jacketPrice);
            jacketsContainer.appendChild(button);
        }

       
      
}
}

displayProducts();





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


