import './score.css';
import BaseComponent from '../../base-component';
import { RegistrationData, PersonalData } from '../interface-modules/Interfaces';

export default class ScorePage extends BaseComponent{
  constructor() {
    super();
  }

  getPage(dataAllPersons: PersonalData[]): HTMLElement {
    return this.createMain(dataAllPersons);
  }

  createMain(dataAllPersons: PersonalData[]): HTMLElement {
    const main: HTMLElement = this.createElement('main', ['main'], '');
    const container: HTMLElement = this.createElement('div', ['container', 'main-container'], '');
    const wrapContent: HTMLElement = this.createElement('div', ['wrap-content'], 'wrap-score');

    wrapContent.append(this.createTittle());
    wrapContent.append(this.createListScore(dataAllPersons));
    container.append(wrapContent);
    main.append(container);
    return main;
  }

  createTittle(): HTMLElement {
    const title: HTMLElement = this.createElement('h2', ['score-title'], '');
    title.innerHTML = 'Best players';
    return title;
  }
 
  createListScore(dataAllPersons: PersonalData[]): HTMLElement {
    const ul: HTMLElement = this.createElement('ul', ['score-list'], '');
    
    const sorted: PersonalData[]  = dataAllPersons.slice(0).sort((a: PersonalData,b: PersonalData): number => {
      let result: number = 0;
      if (a.score && b.score) {
        result = a.score - b.score
      }
      return result
    }).reverse();

    const list: string = sorted.splice(0, 10).map((person) => {
      return `
        <li class="item">
          <div class="item__person">
            <p class="item__person-name">${person.firstName} ${person.lastName}</p>
            <p class="item__person-email">${person.email}</p>
          </div>
          <p class="item__score">Score: <span>${person.score}</span></p>
        </li>
      `
    }).join('')
     
    ul.innerHTML = list;

    return ul;
  }
}