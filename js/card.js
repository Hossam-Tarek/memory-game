
document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard));

function flipCard(){
    this.children[0].classList.toggle("front-toggle");
    this.children[1].classList.toggle("back-toggle");
}