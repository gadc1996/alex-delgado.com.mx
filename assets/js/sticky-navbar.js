window.onscroll = function() {sticky()};//Execute sticky when user scroll
let navbar = document.querySelector('.nav-bar');//Get the navbar
let sticky = navbar.offsetTop; //Set offset position for navbar
function sticky() { //Add sticky class to navbar when it reach the top
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } 
    else {
        navbar.classList.remove("sticky");
    }
} 