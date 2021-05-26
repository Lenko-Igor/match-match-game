import './settings.css';
import BaseComponent from '../../base-component';

export default class SettingsPage extends BaseComponent{
  constructor() {
    super();
  }

  getPage(): HTMLElement {
    return this.createMain();
  }

  createMain(): HTMLElement {
    const main = this.createElement('main', ['main'], '');
    const container = this.createElement('div', ['container', 'main-container'], '');
    const wrapContent = this.createElement('div', ['setting-content'], '');

    wrapContent.innerHTML = this.createContent();
    container.append(wrapContent);
    main.append(container);
    return main;
  }

  createContent():string {
    const content = `
      <h2 class="setting-title">Difficulty</h2>
      <form class="setting-feild">
        <label class="setting-select__title" for="easy">easy</label>
        <input class="setting-select" type="radio" name="difficulty" id="easy" checked>
        <label class="setting-select__title" for="middle">middle</label>
        <input class="setting-select" type="radio" name="difficulty" id="middle">
        <label class="setting-select__title" for="difficult">difficult</label>
        <input class="setting-select" type="radio" name="difficulty" id="difficult">
      </form>
    `;
    return content;
  }
}