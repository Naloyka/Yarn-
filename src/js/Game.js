import Field from './Field';
/* eslint-disable */
export default class Game { // eslint-disable-line
  constructor(element) {
    element = document.querySelector(element);
    this.element = element;
    this.onClick = this.onClick.bind(this);

    const field = document.querySelector('.field');
    field.addEventListener('click', this.onClick);
    this.count = 1;
  }

  onClick(e) {
    const targetEl = e.target;

    if (targetEl.className.includes('container')) {
      if (this.count < 5) {
        this.count += 1;
      } else {
        const gameOver = document.querySelector('.game-over');
        gameOver.classList.remove('hide');
        field.gameOver();
      }
    }

    if (targetEl.closest('.goblin')) {
      this.sumCount();
      this.element.classList.add('hide');
    }
  }

  sumCount() {
    const count = document.querySelector('.count');
    count.textContent = parseInt(count.textContent) + 1;
  }
}
const el = new Game('.goblin');

const field = new Field('.container');
field.startGame();
