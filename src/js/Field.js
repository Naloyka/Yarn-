/* eslint-disable */
export default class Field { // eslint-disable-line
  constructor(element) {
    element = [...document.querySelectorAll(element)];
    this.element = element;
    this.current;
    this.length = this.element.length - 1;
    this.randomPosition = this.randomPosition.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.interval;
  }

  randomPosition() {
    const lengthContainer = Math.floor(this.length);
    const goblin = document.querySelector('.goblin');
    const randomNumber = Math.floor(Math.random() * (lengthContainer - 0 + 1));
    goblin.classList.remove('hide');

    if (randomNumber === this.current) {
      this.randomPosition();
    } else {
      this.current = randomNumber;
      this.element[randomNumber].appendChild(goblin);
    }
  }

  startGame() {
    this.interval = setInterval(this.randomPosition, 1000);
  }

  gameOver() {
    clearInterval(this.interval);
  }
}
