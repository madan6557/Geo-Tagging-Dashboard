var nav = document.getElementById("nav-button");
var navbar = document.getElementById("navbar");
var sort = document.getElementById("sortBy");

nav.addEventListener("click", function () { setVisible(navbar); });
sort.addEventListener("click", function () { sortBy(sort); });

function sortBy(element) {
    if (element.classList.contains("asc")) {
        element.classList.remove("asc")
        element.classList.add("desc")
    } else {
        element.classList.remove("desc")
        element.classList.add("asc")
    }
}

function setVisible(element) {
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}
