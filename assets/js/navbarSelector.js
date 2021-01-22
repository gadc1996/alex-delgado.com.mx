const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.navbarSelector');

navbarOptions = {
    threshold: [0.2,.8],
    rootMargin: '-70% 0 -30% 0'
}

sectionObserver = new IntersectionObserver( sections => {
    sections.forEach( section => {
        
        if(section.isIntersecting){
            navLinks.forEach( navLink => navLink.classList.remove('active'));
            switch(section.target.getAttribute("data-selector")){
                case '0':
                    navLinks[0].classList.toggle('active');
                    break;
                case '1':
                    navLinks[1].classList.toggle('active');
                    break;
                case '2':
                    navLinks[2].classList.toggle('active');
                    break;
                default:
                    break;
            }
        } 
    });
});

sections.forEach ( section => sectionObserver.observe(section));