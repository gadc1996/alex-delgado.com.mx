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
//        this.actual++;
        // setTimeout(() => this.filling(), 500);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach( progressBar => {
        let fill = progressBar.getAttribute('data-fill');
        let skillName = progressBar.innerHTML;
        new ProgressBar(progressBar, fill, skillName);
    })
}
