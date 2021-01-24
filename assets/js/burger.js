
const burger = document.querySelector('.burger');
const mobilMenu = document.querySelector('.mobil-nav');
const mobilLinks = document.querySelectorAll('.mobil-nav .nav-link');
const footer = document.querySelector('footer');

let isClosed = true;
burger.addEventListener('click', () => {
    if(isClosed){
        mobilLinks.forEach ( link => link.style.display = 'block')
        mobilMenu.style.width = '100%';
        isClosed = false;
    }
    else{
        mobilLinks.forEach ( link => link.style.display = 'none');
        mobilMenu.style.width = '0%';
        isClosed = true;
    }
});


//Hide burger if its intersecting with footer, overlaps social icons
let burgerObserver = new IntersectionObserver( (footer) => {
    footer[0].isIntersecting ? burger.style.display = 'none' : burger.style.display = 'flex';
});

burgerObserver.observe(footer);