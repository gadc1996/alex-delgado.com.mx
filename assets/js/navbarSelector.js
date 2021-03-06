const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.navbarSelector');
const mobilNavLinks = document.querySelectorAll('.nav-link-mobil');
navbarOptions = {
    threshold: [0.2,.8],
    rootMargin: '-50% 0 -50% 0'
}

sectionObserver = new IntersectionObserver( sections => {
    sections.forEach( section => {
        console.log('runing');
        if(section.isIntersecting){
            navLinks.forEach( navLink => navLink.classList.remove('active'));
            mobilNavLinks.forEach( navLink => navLink.classList.remove('active'));
            switch(section.target.getAttribute("data-selector")){
                case '0':
                    navLinks[0].classList.toggle('active');
                    mobilNavLinks[0].classList.toggle('active');
                    break;
                case '1':
                    navLinks[1].classList.toggle('active');
                    mobilNavLinks[1].classList.toggle('active');
                    break;
                case '2':
                    navLinks[2].classList.toggle('active');
                    mobilNavLinks[2].classList.toggle('active');
                    break;
                default:
                    break;
            }
        } 
    });
});

sections.forEach ( section => sectionObserver.observe(section));
