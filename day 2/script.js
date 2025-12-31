const buttonPageOne = document.getElementById("page-one-button");
const mainContent  = document.getElementById("main-content");

buttonPageOne.addEventListener("click", function(){
    mainContent.innerHTML = `<title>Page one</title>
            <div>content for page one</div>
            <ul>
                     <li>List item</li>
            <li>List item</li>
            </ul>`
})

// page-one-button">Page one</button>
        // <button id="page-two-button"