

function showError(message) {
    const errorContainer = document.getElementById("jackets_container");
    errorContainer.innerHTML = `<h3>Unfortunately and error occured...</h3>`; 
}


function showLoadingIndicator() {
    const loadItemlist = document.getElementById("jackets_container");
    loadItemlist.innerHTML = "<div>Loading...</div>";
}


//Function to fetch API data and populate the product list



export async function getProducts() {
    //Display loading indicator
    showLoadingIndicator();
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
        if(response.ok){
            showLoadingIndicator();
        }
        if(!response.ok){
            throw showError();
        }
        const result = await response.json();
        return result;   
    }   catch (error) {
        throw error;
    }
}
  
    getProducts();

   



//THIS ERROR HANDELING IS NOT WORKING... TRIED PUTTING IT IN THE FUNCTION, DID NOT WORK. WHY? 


