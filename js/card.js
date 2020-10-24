
var cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard(){
    this.children[0].classList.toggle("flip");
    this.classList.toggle("disabled");
}