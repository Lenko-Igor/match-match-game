import './header.css';
import BaseComponent from '../../base-component';

export default class Header extends BaseComponent {
  readonly feild: HTMLElement;
  readonly container: HTMLElement;
  readonly logo: HTMLElement;
  readonly menu: HTMLElement;
  readonly button: HTMLElement;
  public name: HTMLElement;

  constructor() {
    super()
    this.feild = this.createElement('header', ['header'], '');
    this.container = this.createContainer();
    this.logo = this.createLogo();
    this.menu = this.createMenu();
    this.name = this.createElement('p', ['first-name', 'hidden'], 'firstName');
    this.button = this.createButton();
  }

  getHeader():HTMLElement {
    this.toPlaceElements(this.container, [this.logo, this.menu, this.button]);
    this.toPlaceElements(this.feild, [this.container]);
    return this.feild;
  }

  createContainer(): HTMLElement  {
    return this.createElement('div', ['container','header-container'], '');
  }

  createLogo(): HTMLElement {
    const logo = this.createElement('div', ['header-logo'], '')
    
    logo.innerHTML = `
      <div class="logo-up">
        <p class="logo-text">MATCH</p>
      </div>
      <div class="logo-down">
        <p class="logo-text">MATCH</p>
      </div>
    `
    return logo;
  }

  createMenu(): HTMLElement  {
    const menu = this.createElement('menu', ['menu'], '')
    
    menu.innerHTML = `
      <ul class="header-menu__items">
        <li class="header-menu__item item-about item-select">
          <div class="header-menu__img"><p>?</p></div>
          <p class="header-menu__text">About Game</p>  
        </li>
        <li class="header-menu__item item-score">
          <div class="header-menu__img"></div>
          <p class="header-menu__text">Best Score</p> 
        </li>
        <li class="header-menu__item item-setting">
          <div class="header-menu__img"></div>
          <p class="header-menu__text">Game Settings</p>
        </li>
      </ul>
    `
    return menu;
  }

  createButton(): HTMLElement {
    const buttonFeild = this.createElement('div', ['header-button-feild'], '');
    const buttonStartGame = this.createElement('button', ['header-button', 'header-button-start', 'hidden'], 'startGame');
    const buttonRegistration = this.createElement('button', ['header-button'], 'regBtn');

    buttonStartGame.innerHTML = `
      <p class="header-button__text">start game</p>
    `;
    buttonRegistration.innerHTML = `
      <p class="header-button__text">register new player</p>
    `;

    buttonFeild.append(this.name);
    buttonFeild.append(buttonStartGame);
    buttonFeild.append(buttonRegistration);
    
    return buttonFeild;
  }

  toPlaceElements(wrap: HTMLElement, arr: HTMLElement[]) {
    arr.forEach(element => wrap.append(element));
  }
}