

//Error message

function showingErrorMessage() {
    const displayErrorMessage = document.getElementById("jackets_container");
    displayErrorMessage.innerHTML = "<div> Unfortunately an error occured when loading the products </div>";
}

showingErrorMessage();


//Loading indicator

function showingLoadingIndicator() {
    const loadItemlist = document.getElementById("jackets_container");
    loadItemlist.innerHTML = "<div>Loading...</div>";
}

showingLoadingIndicator();