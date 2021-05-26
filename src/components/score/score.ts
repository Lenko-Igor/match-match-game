import BaseComponent from '../../base-component';

export default class ScorePage extends BaseComponent{
  constructor() {
    super();
  }

  getPage(): HTMLElement {
    return this.createMain();
  }

  createMain(): HTMLElement {
    const main = this.createElement('main', ['main'], '');
    const container = this.createElement('div', ['container', 'main-container'], '');
    const wrapContent = this.createElement('div', ['wrap-content'], '');

    wrapContent.innerHTML = this.createContent();
    container.append(wrapContent);
    main.append(container);
    return main;
  }

  createContent():string {
    const content = `<h2 class="content-title">Score</h2>`;
    return content;
  }
}