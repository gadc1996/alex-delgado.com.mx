window.onscroll = function() {addSticky()}; //Executes function when the user scrolls
let navbar = document.querySelector('.nav-bar'); //Get the navbar
let sticky = navbar.offsetTop; //Get the offset of the navbar
function addSticky() { //Add sticky class to navbar
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } 
    else {
        navbar.classList.remove("sticky");
    }
} 