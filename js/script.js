
import { getProducts } from "./api.js";




//Display jackets and information on site


async function displayProducts(){
    const jacketsInfo = await getProducts();
    const jacketsContainer = document.getElementById("jackets_container");

    
    for (let i = 0; i < jacketsInfo.length; i++) {
        const jacket = jacketsInfo[i];
        
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
        jacketPrice.innerHTML = `<span class="product_price">$${jacket.price}</span>`;

        const jacketDetails = document.createElement("a");
        jacketDetails.classList.add("jacketDetails");
        jacketDetails.addEventListener("click", () => {
        window.location.href = `product.html?id=${jacket.id}&title=${jacket.title}`;
    
            
        });

        if (jacket.onSale) {
            jacketPrice.innerHTML = `<span class="product_price">$${jacket.price}          </span><span class= jacketSale>${jacket.discountedPrice}</span>`;
            }

            const button = document.createElement("a");
            button.href = `product.html?id=${jacket.id}&title=${jacket.title}`; 
            button.classList.add("button_small");
            button.textContent = "View";

            jacketsContainer.appendChild(jacketDetails);
            jacketsContainer.appendChild(image);
            jacketsContainer.appendChild(jacketTitle)
            jacketsContainer.appendChild(jacketPrice);
            jacketsContainer.appendChild(button);

            
        }
      
}

displayProducts();



