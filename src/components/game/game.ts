import './game.css';
import BaseComponent from '../../base-component';

export default class extends BaseComponent {
  constructor() {
    super()
  }

  getPage(): HTMLElement {
    return this.createGame();
  }

  createContent(): string {
    return `<h1>GAME</h1>`
  }

  createGame(): HTMLElement {
    const main = this.createElement('main', ['main'], '');
    const container = this.createElement('div', ['container', 'main-container'], '');
    const wrapContent = this.createElement('div', ['wrap-content'], '');

    wrapContent.innerHTML = this.createContent();
    container.append(wrapContent);
    main.append(container);
    return main;
  }
} 