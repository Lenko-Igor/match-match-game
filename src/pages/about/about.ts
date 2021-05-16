import './about.css';
import Header from '../../components/header/header';
import BaseComponent from '../../base-component';

export default class AboutPage extends BaseComponent {
  readonly header: HTMLElement;
  readonly main: HTMLElement;
  readonly place: HTMLElement;
  readonly date: any[];
  readonly login: boolean;

  constructor(place: HTMLElement, login: boolean) {
    super();
    this.place = place;
    this.date = [
      {point: '1', text: 'Register new player in game', class: 'image1'},
      {point: '2', text: 'Configure your game settings', class: 'image2'},
      {point: '3', text: 'Start you new game! Remember card positions and match it before times up.', class: 'image3'},
    ];
    this.login = login;
    this.header = new Header().feild;
    this.main = this.createMain();
    this.init(this.login);
  }

  init(login: boolean) {
    if (!login) {
      this.fillPlace([this.header, this.main]);
    }
  }
  
  clearPlace() {
    this.place.innerHTML = '';
  }

  createMain(): HTMLElement {
    const main = this.createElement('main', ['main'], '');
    const container = this.createElement('div', ['container', 'main-container'], '');
    const wrapContent = this.createElement('div', ['wrap-content'], '');

    wrapContent.innerHTML = this.getContent(this.date);
    container.append(wrapContent);
    main.append(container);
    return main;
  }

  getContent(arr: any[]):string {
    const content = `<h2 class="content-title">How to play?</h2>`;
    const row = arr.map(elem => {
      return `
      <div class="content-feild">
        <div class="content-row">
          <div class="content-row__left">
            <div class="point">
              <p>${elem.point}</p>
            </div>
            <p>${elem.text}</p>
          </div>
          <div class="content-row__right ${elem.class}"></div>
        </div>
      </div>
      `
    }).join('');

    return content + row;
  }

  fillPlace(arr: HTMLElement[]) {
    this.clearPlace();
    arr.forEach(element => this.place.append(element))
  }

}