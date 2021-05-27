import './game.css';
import BaseComponent from '../../base-component';
import Timer from './../timer/timer';


export default class GamePage extends BaseComponent {
  private props: string[];
  public timer: Timer;

  constructor() {
    super();
    this.props = [];
    this.timer = new Timer();
  }

  getPage(props: string[], difficulty: string): HTMLElement {
    this.props = props;
    return this.createGame(difficulty);
  }

  createFeildGame(difficulty: string): HTMLElement {
    const feild = this.createElement('div', ['cards-feild'], '')
    feild.append(this.createCards(difficulty)); 
    
    return feild
  }

  createCards(difficulty: string): HTMLElement {
    const cardsContainer = this.createElement('div', ['card-container', difficulty], '')
    const props = this.props;
    const content: string = props.map((prop) => {
      return this.createCard(prop);
    }).join('');

    cardsContainer.innerHTML = content;

    return cardsContainer;
  }

  createCard(img: string): string {
    return `
    <div style="perspective: 25rem">
      <div class="card-wrap" data-value=${img}>
        <div class="card back"></div>
        <div class="card front" 
            style="background: url('../src/images/game/${img}') no-repeat center;
            background-size: cover;">
        </div>
      </div>
    </div>
    `
  }

  createGame(difficulty: string): HTMLElement {
    const main = this.createElement('main', ['main'], '');
    const wrapContent = this.createElement('div', ['wrap-content'], '');

    wrapContent.append(this.timer.createHTMLElementTimer());
    wrapContent.append(this.createFeildGame(difficulty));
    main.append(wrapContent);
    
    return main;
  }

  toRotateCard(element: Element) {
    if (element?.classList.contains('rotate')) {
      element?.classList.toggle('rotate');
    }
  }

  toRotateAllcards(element: Element) {
    element?.classList.toggle('rotate');
  }

  getResultSelectCards(arrSelected: Element[]) {
    arrSelected.forEach(element => {
      this.toRotateAllcards(element);
    })
  }
} 