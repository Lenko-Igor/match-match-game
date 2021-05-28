import BaseComponent from './base-component'; 
import Header from './components/header/header';
import AboutPage from './components/about/about';
import ScorePage from './components/score/score';
import SettingsPage from './components/settings-page/settings'
import RegistrationForm from './components/registration/registration-form';
import GamePage from './components/game/game';
import { SettingData, RegistrationData, ItemsForScore, PersonalData } from './components/interface-modules/Interfaces';
import DataBase from './components/data-base/data-base';


export default function mvc(app: HTMLElement) {
  // View
  class View {
    readonly app: HTMLElement;
    readonly modalFeild: HTMLElement;
    readonly ModalWindow: RegistrationForm;
    readonly modalWindow: HTMLElement;
    readonly header: Header;
    readonly AboutPage: HTMLElement;
    readonly ScorePage: ScorePage;
    readonly Settings: SettingsPage;
    readonly Game: GamePage;

    constructor(app: HTMLElement) {
      this.app = app;
      this.modalFeild = new BaseComponent().createElement('div', ['modal-feild'], '');
      this.ModalWindow = new RegistrationForm();
      this.modalWindow = this.ModalWindow.modalWindow;
      this.header = new Header();
      this.AboutPage = new AboutPage().getPage();
      this.ScorePage = new ScorePage();
      this.Settings = new SettingsPage();
      this.Game = new GamePage();
      this.init();
    }
    
    init() {
      this.modalFeild.append(this.modalWindow);
      this.app.before(this.modalFeild);
    }

    showFirstPage() {
      this.app.append(this.header.getHeader());
      this.app.append(this.AboutPage);
    }

    openSelectedPage(item: Element, dataAllPersons?: PersonalData[]) {
      const items = this.header.menu.querySelectorAll('.header-menu__item');
      items.forEach(elem => elem.classList.remove('item-select'));
      item.classList.add('item-select');

      if (item.classList.contains('item-about')) {
        this.showPage(this.AboutPage);
      }
      if (item.classList.contains('item-score')) {
        if (dataAllPersons) this.showPage(this.ScorePage.getPage(dataAllPersons));
      }
      if (item.classList.contains('item-setting')) {
        this.showPage(this.Settings.getPage());
      }
    }

    openScorePage(dataAllPersons?: PersonalData[]) {
      if (dataAllPersons) this.showPage(this.ScorePage.getPage(dataAllPersons));
    }

    showModalWindow(win?: string, score?: number) {
      (win && score)
        ? this.ModalWindow.openModalWin(score) 
        : this.ModalWindow.openModalRegistration();
    }

    hiddenModalWindow(win?: string) {
      if (win) {
        this.ModalWindow.closeModalWin();
      } else {
        const modal = document.querySelector('.modal-fon');
        const inputs = modal?.querySelectorAll('input');
        
        this.ModalWindow.closeModalRegistration(); 
        
        inputs?.forEach(inp => {
          inp.value = '';
          inp.nextElementSibling?.classList.add('error');
        });
      }
    }

    showStartGameButton() {
      const regBtn = this.app.querySelector('#regBtn');
      const startBtn = this.app.querySelector('#startGame');

      regBtn?.classList.add('hidden');
      startBtn?.classList.remove('hidden');
    }

    showStartStopGameButton(id: string, nameBtn: string) {
      const startGame = this.app.querySelector('.header-button-start');
      if (startGame) {
        startGame.id = id;
        const text = startGame.firstElementChild;
        if (text) text.innerHTML = nameBtn;
      }
    }

    showAvatarName(name: string) {
      this.header.name.innerHTML = name;
      this.header.name.classList.toggle('hidden');
    }

    showStatusInput(id: string, status: boolean) {
      const input = this.modalWindow.querySelector(`#${id}`);
      if (status) {
        input?.nextElementSibling?.classList.remove('error');
      } else {
        input?.nextElementSibling?.classList.add('error');
      }
    }

    showStylesdAddButton(status: boolean) {
      const buttonAdd = document.querySelector('#add');
      
      if (!buttonAdd) throw 'error';

      if (status) {
        buttonAdd.classList.add('disabled');
        buttonAdd.classList.remove('active');
      } else {
        buttonAdd.classList.remove('disabled');
        buttonAdd.classList.add('active');
      }
    }

    showGamePage(props: string[], difficulty: string) {
      this.app.lastElementChild?.replaceWith(this.Game.getPage(props, difficulty));
    }

    showPage(content: HTMLElement) {
      this.app.lastElementChild?.replaceWith(content);
    }

    showRotate(card: Element) {
      this.Game.toRotateCard(card)
    }

    showResultSelect(arrSelect: Element[]) {
      this.Game.getResultSelectCards(arrSelect);
    }

    rotateAllCards() {
      const cards = this.app.querySelectorAll('.card-wrap');

      cards.forEach((card) => {
        this.Game.toRotateAllcards(card);
      });
    }

    showStartTimer() {
      this.Game.timer.startTimer();
    }
    
    showStopTimer() {
      this.Game.timer.stopTimer();
    }

  }
  // Model
  class Model {
    private view: View;
    private regData: RegistrationData;
    private arrElementsPressed: Element[];
    private imagesForGame: string[];
    private difficulty: string;
    private settingData: SettingData;
    private itemsForScore: ItemsForScore;
    private score: number;

    private dataBase: DataBase;

    constructor(view: View){
      this.view = view;
      this.regData = {firstName: '', lastName: '', email: ''};
      this.arrElementsPressed = [];
      this.imagesForGame = [];
      this.settingData = {};
      this.difficulty = this.view.Settings.getValueDifficulty();
      this.itemsForScore = {
        amountAllCards: 0,
        amountOpenedCards: 0,
        amountAllCompareCards: 0,
        amountFatalCompareCards: 0,
        timer: 0
      }
      this.score = 0;
      this.dataBase = new DataBase(); 
      this.init();
      this.getDataSettings();
    }

    init() {
      this.getLoadFirstPage();
    }

    getLoadFirstPage() {
      this.view.showFirstPage();
    }

    selectMenu(item: Element) {
      this.getStopGame();
      if (item.classList.contains('item-score')) {
        this.view.openSelectedPage(item, this.dataBase.dataAllPersons);         
       } else {
        this.view.openSelectedPage(item);
      }
    }

    closeModalWindow(deleteData?: string) {
      if (deleteData) {
        this.regData.firstName = ''; 
        this.regData.lastName = '';
        this.regData.email = '';
        this.getStatusDisabledButton(true);
      };
      this.view.hiddenModalWindow();
    }

    closeModalWin() {
      this.view.hiddenModalWindow('win');
      this.view.openScorePage(this.dataBase.dataAllPersons);        
    }

    openModalWindow() {
      this.view.showModalWindow();
    }

    checkValueInput(id: string, value: string) {
      const regName = /^[a-zA-Zа-яА-Я]+$/ui;
      const regEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      
      if (id === 'firstName' || id === 'lastName') {
        if (regName.test(value)) {
          this.regData[id] = value;
          this.view.showStatusInput(id, true);
        } else {
          this.regData[id] = '';
          this.view.showStatusInput(id, false);
        }  
      }
      if (id === 'email') {
        if (regEmail.test(value)) {
          this.regData[id] = value;
          this.view.showStatusInput(id, true);
        } else {
          this.regData[id] = '';
          this.view.showStatusInput(id, false);
        }
      }
      this.checkValueData()? this.getStatusDisabledButton(false) : this.getStatusDisabledButton(true);
    }

    checkValueData(): boolean {
      let result = false;

      if (this.regData.firstName && this.regData.lastName && this.regData.email) {
          result = !result;
      }

      return result;
    }

    getStatusDisabledButton(status: boolean) {
      this.view.showStylesdAddButton(status);
    }

    checkRegistrationData() {
      if (this.checkValueData()) {
        this.closeModalWindow();
        this.view.showStartGameButton();
        this.view.showAvatarName(this.regData.firstName);
      }
    }

    getStartGame() {
      this.imagesForGame = this.getPropsForGame(this.settingData, this.view.Settings.getValueDifficulty(), this.view.Settings.getTypeCards());
      this.view.showGamePage(this.imagesForGame, this.view.Settings.getValueDifficulty());
      this.view.showStartTimer();
      this.view.showStartStopGameButton('stopGame', 'stop game');

      this.itemsForScore.amountAllCards = this.imagesForGame.length,
      this.itemsForScore.amountOpenedCards = 0;
      this.itemsForScore.amountAllCompareCards = 0;
      this.itemsForScore.amountFatalCompareCards = 0;
      this.itemsForScore.timer = 0;

      setTimeout(() => {  //    исправить на 30 секунд
        this.view.rotateAllCards();        
      }, 3000);
    }

    getStopGame(win?: string) {
      this.arrElementsPressed = [];
      this.view.showStartStopGameButton('startGame', 'start game');
      this.view.showStopTimer();
      this.itemsForScore.timer = this.view.Game.timer.valueTimer;
      
      if (win) {
        this.score = (
          (this.itemsForScore.amountAllCompareCards - this.itemsForScore.amountFatalCompareCards) * 100
          ) - this.itemsForScore.timer * 10;
        
        const person: PersonalData = {
          firstName: this.regData.firstName,
          lastName: this.regData.lastName,
          email: this.regData.email,
          score: this.score,
        };

        this.dataBase.addPerson(person);
        this.dataBase.getAllPersons();

        this.view.showModalWindow('win', this.score);
      }
    }

    async getDataSettings() {
      const rect = await fetch('../setting.json');
      const data = await rect.json();
      this.settingData = data;
    }

    getPropsForGame(data: any, difficulty: string, type: string): string[] {
      const value: number = data.difficulty[difficulty];
      const images: [] = data.images[type].slice(0, value);
      const arr: any[] = images.map((elem) => images);
      const result: string[] = arr.reduce((acc, val) => acc.concat(val), []).sort(() => Math.random() - 0.5);

      return result;
    }

    toRotateCard(element: Element) {
      this.view.showRotate(element);
      this.toFillarrElementsPressed(element);
    }

    toFillarrElementsPressed(element: Element) {
      if (this.arrElementsPressed.length <= 1) {
        this.arrElementsPressed.push(element)
        this.checkElementsPressed(this.arrElementsPressed)
      }
    }

    checkElementsPressed(arr: any[]) {
      if (arr.length === 2) {
        this.itemsForScore.amountAllCompareCards ++;
        if (arr[0].dataset.value !== arr[1].dataset.value) {
          this.itemsForScore.amountFatalCompareCards ++;
          setTimeout(() => {
            this.view.showResultSelect(arr);
            this.arrElementsPressed = [];
          }, 500)
        } else {
          this.itemsForScore.amountOpenedCards += 2;
          this.arrElementsPressed = [];
          if (this.itemsForScore.amountOpenedCards === this.itemsForScore.amountAllCards) {
            this.getStopGame('win');
          }
        }
      }
    }
  }

  // Controller
  class Controller {
    readonly app: HTMLElement;
    private model: Model;

    constructor(app: HTMLElement, model: Model){
      this.app = app;
      this.model = model;
      this.init();
    }

    init() {
      const modalWindow = document.querySelector('.modal-feild');
      const addBtn = document.querySelector('#add');
      const winBtn = document.querySelector('#win');
      const cancelBtn = document.querySelector('#cancel');
      const regBtn = this.app.querySelector('#regBtn');
      const inputs = modalWindow?.querySelectorAll('input');
      const menuButtons = this.app.querySelectorAll('.header-menu__item');

      // get event on modal window
      addBtn?.addEventListener('click', () => {
        this.clickAddBtnModal();
        const startGame = this.app.querySelector('.header-button-start');

        startGame?.addEventListener('click', () => {
          if (startGame.id === 'startGame') {
            this.clickStartGame();
            return;
          }
          if (startGame.id === 'stopGame') {
            this.clickStopGame();
            return;
          }
        })
      })
      
      cancelBtn?.addEventListener('click', () => {
        this.clickCancelBtnModal();
      })

      winBtn?.addEventListener('click', () => {
        this.clickWinBtnModal();
      })

      inputs?.forEach((inp) => {
        inp.addEventListener('change', () => {
          this.getParametrsInput(inp.id, inp.value);
        })
      })
      
      // get event on aap 
      menuButtons.forEach(menu => {
        menu.addEventListener('click', () => {
          this.clickMenuButton(menu);
        })
      })

      regBtn?.addEventListener('click', () => {
        this.clickNewPlayerBtn();
      })
    }

    clickMenuButton(item: Element) {
      this.model.selectMenu(item);
    };

    clickNewPlayerBtn() {
      this.model.openModalWindow();
    }

    clickCancelBtnModal() {
      this.model.closeModalWindow('deleteData');
    }

    clickAddBtnModal() {
      this.model.checkRegistrationData();
    }

    clickWinBtnModal() {
      this.model.closeModalWin();
    }

    getParametrsInput(id: string, value: string) {
      this.model.checkValueInput(id, value);
    }

    clickStartGame() {
      this.model.getStartGame();
      const card = document.querySelectorAll('.card-wrap');

      card.forEach((card) => { 
        card.addEventListener('click', () =>{ 
          if (card.classList.contains('rotate')) {
            this.model.toRotateCard(card);
          }
        })
      })
    }

    clickStopGame() {
      this.model.getStopGame();
    }
  }

  const view = new View(app);
  const model = new Model(view);
  const controller = new Controller(app, model);
}