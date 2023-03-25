
export default function iconsLoader() {
    const testCards = document.querySelectorAll('.card__icon');
    console.log(testCards)
    testCards[0].classList.add('icon-physics');
    testCards[1].classList.add('icon-meal');
    testCards[2].classList.add('icon-sleep');
}