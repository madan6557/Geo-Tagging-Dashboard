var nav = document.getElementById("nav-button");
var navbar = document.getElementById("navbar");
console.log(navbar);

nav.addEventListener("click", function () { setVisible(navbar); });

function setVisible(element) {
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}
