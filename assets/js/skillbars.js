class ProgressBar{
    constructor(progressBar, fill, skillName){
    this.progressBar = progressBar;
    this.skillName = skillName
    this.fill = fill;
    this.speed = 15;
    this.actual = 0;
    this.filling();
    }
    filling(){ 
        if( this.actual < this.fill){
            this.progressBar.style.width = String(this.actual++)+"%";
            this.progressBar.innerHTML = this.skillName+String(this.actual)+"%";
            setTimeout(() => this.filling(), this.speed);
        }
        else{
            return;
        }
        return;
    }
}

let options = {
    threshold: 0,
    rootMargin: '0px 0px -30% 0px'
}

var progressBars = document.querySelectorAll('.progress');
let observer = new IntersectionObserver((progressBars) => {
    progressBars.forEach( progressBar => {
        if(progressBar.isIntersecting ){
            let fill = progressBar.target.getAttribute('data-fill');
            let skillName = progressBar.target.innerHTML;
            setTimeout(()=> new ProgressBar(progressBar.target, fill, skillName), 1500);
            observer.unobserve(progressBar.target)
        }
    });
    
}, options);

progressBars.forEach( progressBar => observer.observe(progressBar));

