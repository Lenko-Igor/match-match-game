import './settings.css';
import BaseComponent from '../../base-component';

export default class SettingsPage extends BaseComponent{
  public difficulty: string;

  constructor() {
    super();
    this.difficulty = 'easy';
  }

  getPage(): HTMLElement {
    return this.createMain();
  }

  createMain(): HTMLElement {
    const props: string[] = ['easy', 'middle', 'difficult'];
    const main = this.createElement('main', ['main'], '');
    const container = this.createElement('div', ['container', 'main-container'], '');
    const wrapContent = this.createElement('div', ['setting-content'], '');
    const title = this.createElement('h2', ['setting-title'], '');
    const form = this.createElement('form', ['setting-feild'], '');

    title.innerHTML = 'Difficulty';
    wrapContent.append(title);
    props.forEach(prop => {
      form.append(this.createInputBlock(prop));
    });
    wrapContent.append(form);
    container.append(wrapContent);
    main.append(container);
    return main;
  }

  createInputBlock(text: string): HTMLElement {
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

  getValueDifficulty(): string {
    return this.difficulty
  }
}