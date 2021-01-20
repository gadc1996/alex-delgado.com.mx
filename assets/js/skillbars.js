class ProgressBar{
    constructor(progressBar, fill, skillName){
    this.progressBar = progressBar;
    this.skillName = skillName
    this.speed = 20;
    this.fill = fill;
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

//document.addEventListener('DOMContentLoaded', init);
 let options = {
     threshold: 1.0
 }
 let observer = new IntersectionObserver(init, options);
 var target = document.querySelector('.skillbar');
 observer.observe(target);
 var isFilled = false;
function init(){
    if(!isFilled){
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach( progressBar => {
        let fill = progressBar.getAttribute('data-fill');
        let skillName = progressBar.innerHTML;
        new ProgressBar(progressBar, fill, skillName);
    });
        isFilled = true;
    }
}
