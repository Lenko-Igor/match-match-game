import './header.css';
import CreateElement from '../../create-element';

export default class Header {
  readonly feild: HTMLElement
  readonly container: HTMLElement
  readonly logo: HTMLElement
  readonly menu: HTMLElement
  readonly button: HTMLElement
  
  constructor() {
    this.feild = new CreateElement('header', ['header'], '').element;
    this.container = this.createContainer();
    this.logo = this.createLogo();
    this.menu = this.createMenu();
    this.button = this.createButton();
    this.toPlaceElements(this.container, [this.logo, this.menu, this.button]);
    this.toPlaceElements(this.feild, [this.container])
  }

  createContainer(): HTMLElement  {
    const container = new CreateElement('div', ['container','header-container'], '');
    return container.element
  }

  createLogo(): HTMLElement {
    const logo = new CreateElement('div', ['header-logo'], '');
    logo.element.innerHTML = `
      <div class="logo-up">
        <p class="logo-text">MATCH</p>
      </div>
      <div class="logo-down">
        <p class="logo-text">MATCH</p>
      </div>
    `
    return logo.element
  }

  createMenu(): HTMLElement  {
    const menu = new CreateElement('menu', [], '');
    menu.element.innerHTML = `
      <ul class="header-menu__items">
        <li class="header-menu__item">About Game</li>
        <li class="header-menu__item">Best Score</li>
        <li class="header-menu__item">Game Settings</li>
      </ul>
    `
    return menu.element;
  }

  createButton(): HTMLElement {
    const button = new CreateElement('button', ['header-button'], '');
    button.element.innerHTML = 'register new player';
    return button.element;
  }

  toPlaceElements(wrap: HTMLElement, arr: HTMLElement[]) {
    arr.forEach(element => wrap.append(element));
  }
}