let button = document.getElementById("button");
let navbar = document.getElementById("navbar");

window.onscroll = function () {
    if (scrollY >= 50) {
        button.style.display = "block";
        navbar.style.backgroundColor = "#ccc"
    } else {
        button.style.display = "none";
        navbar.style.backgroundColor = "white"
    }
}
button.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}