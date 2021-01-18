//Quick use
//Add an html element with .typing class and pass the next data parameters:
//data-speed 
//data-waitStart
//data-waitEnd

class TypeWriter{
    constructor(txtElement, words, speed,waitStart, waitEnd){
        this.txtElement = txtElement;
        this.words = words;
        this.speed = speed;
        this.txt = ' ';
        this.wordIndex = 0;
        this.waitStart =parseInt(waitStart, 10);
        this.waitEnd =parseInt(waitEnd, 10);
        this.type();
        this.isDeleting = false;    
    }
    type(){
        const current = this.wordIndex % this.words.length;
        //Get full text of current word
        const fullTxt = this.words[current];
        //Check if deleting
        if(this.isDeleting){
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        }
        else{
            //Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }
        //Insert txt into element
        this.txtElement.innerHTML = this.txt;
        //Initial Type Speed
        let typeSpeed = this.speed;
        if(this.isDeleting){
            typeSpeed /= 2;
        }
        //If word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            //Make a pause at end
            typeSpeed = this.waitEnd;
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.wordIndex++;
            //Pause before start typing
            typeSpeed = this.waitStart;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

//Int on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init(){
    const txtElement = document.querySelector('.typing');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const waitStart = txtElement.getAttribute('data-wait-start');
    const waitEnd = txtElement.getAttribute('data-wait-end');
    const speed = txtElement.getAttribute('data-speed');
    console.log(speed);
    //Init typewriter
    new TypeWriter(txtElement, words, speed, waitStart, waitEnd);
}