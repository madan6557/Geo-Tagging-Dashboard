var nav = document.getElementById("nav-button");
var navbar = document.getElementById("navbar");
console.log(navbar);

nav.addEventListener("click", function() {navVisible(navbar);});

function navVisible(element) {
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}