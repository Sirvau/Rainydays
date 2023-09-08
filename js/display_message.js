
import {displayProducts} from "./script.js";

//Error handeling


const result = document.createElement("p");
        result.classList.add("result");


try { 
    displayProducts();
    
} 
catch (error) {
    console.log("Unfortunately an error occured", error);
    result.textcontent = "Unfortunately an error occured";
}
finally {
    console.log("finally");
}

//Find out why this is not working. Work with error handeling