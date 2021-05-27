import './settings.css';
import BaseComponent from '../../base-component';

export default class SettingsPage extends BaseComponent{
  public difficulty: string;
  public typeCards: string;

  constructor() {
    super();
    this.difficulty = 'easy';
    this.typeCards = 'auto';
  }

  getPage(): HTMLElement {
    return this.createMain();
  }

  createMain(): HTMLElement {
    const propsDifficulty: string[] = ['easy', 'middle', 'difficult'];
    const propsTypeCards: string[] = ['auto', 'animal'];

    const main: HTMLElement = this.createElement('main', ['main'], '');
    const container: HTMLElement = this.createElement('div', ['container', 'main-container'], '');
    const wrapContent: HTMLElement = this.createElement('div', ['setting-content'], '');
    const titleDifficulty: HTMLElement = this.createElement('h2', ['setting-title'], '');
    const formDifficulty: HTMLElement = this.createElement('form', ['setting-feild'], '');
    const titleTypeCards: HTMLElement = this.createElement('h2', ['setting-title'], '');
    const formTypeCards: HTMLElement = this.createElement('form', ['setting-feild'], '');

    titleDifficulty.innerHTML = 'Difficulty';
    titleTypeCards.innerHTML = 'Game cards';
    propsDifficulty.forEach(prop => {
      formDifficulty.append(this.creteDifficultyBlock(prop));
    });
    propsTypeCards.forEach(prop => {
      formTypeCards.append(this.createTypeCardsBlock(prop));
    });


    wrapContent.append(titleDifficulty);
    wrapContent.append(formDifficulty);
    wrapContent.append(titleTypeCards);
    wrapContent.append(formTypeCards);

    container.append(wrapContent);
    main.append(container);
    return main;
  }

  creteDifficultyBlock(text: string): HTMLElement {
    const wrap = this.createElement('div', ['setting-select__wrap'], '');
    const label = this.createElement('label', ['setting-select__title'], '');
    const input = this.createElement('input', ['setting-select'], text);

    label.setAttribute('for', text);
    label.innerHTML = text;
    input.setAttribute('name', 'difficulty');
    input.setAttribute('type', 'radio');
    input.id = text;
    input.addEventListener('change', () => {
      this.difficulty = input.id
    });

    if (text === this.difficulty ) {
      input.setAttribute('checked', 'checked');
    }

    wrap.append(label);
    wrap.append(input);

    return wrap;
  }

  createTypeCardsBlock(text: string): HTMLElement {
    const wrap = this.createElement('div', ['setting-select__wrap'], '');
    const label = this.createElement('label', ['setting-select__title'], '');
    const input = this.createElement('input', ['setting-select'], text);

    label.setAttribute('for', text);
    label.innerHTML = text;
    input.setAttribute('name', 'images');
    input.setAttribute('type', 'radio');
    input.id = text;
    input.addEventListener('change', () => {
      this.typeCards = input.id
    });

    if (text === this.typeCards) {
      input.setAttribute('checked', 'checked');
    }

    wrap.append(label);
    wrap.append(input);

    return wrap;
  }

  getValueDifficulty(): string {
    return this.difficulty;
  }

  getTypeCards(): string {
    return this.typeCards;
  }
}