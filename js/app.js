import Grid from "./Grid.js";


var card = document.querySelectorAll('.card');
card.forEach(card => card.addEventListener('click', flipCard));

function flipCard(){
    this.children[0].classList.toggle("front-toggle");
    this.classList.toggle("disabled");
}