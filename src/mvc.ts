import BaseComponent from './base-component'; 
import Header from './components/header/header';
import AboutPage from './components/about/about';
import RegistrationForm from './components/registration/registration-form';
import GamePage from './components/game/game';


export default function mvc(app: HTMLElement) {
  // View
  class View {
    readonly app: HTMLElement;
    readonly modalFeild: HTMLElement;
    readonly modalWindow: HTMLElement;
    readonly header: HTMLElement;
    readonly AboutPage: HTMLElement;
    readonly GamePage: HTMLElement;

    constructor(app: HTMLElement) {
      this.app = app;
      this.modalFeild = new BaseComponent().createElement('div', ['modal-feild'], '');
      this.modalWindow = new RegistrationForm().modalWindow;
      this.header = new Header().getHeader();
      this.AboutPage = new AboutPage().getPage();
      this.GamePage = new GamePage().getPage();
      this.init();
    }
    
    init() {
      this.modalFeild.append(this.modalWindow);
      this.app.before(this.modalFeild);
    }

    showFirstPage() {
      this.app.append(this.header);
      //this.app.append(this.AboutPage);
      this.app.append(this.GamePage);   // для наглядности пока вставил 
    }

    showModalWindow() {
      const modal = document.querySelector('.modal-fon');
      modal?.classList.add('modal-fon_active')      
    }

    hiddenModalWindow() {
      const modal = document.querySelector('.modal-fon');
      modal?.classList.remove('modal-fon_active');
    }

    showStartGameButton() {}
  }
  // Model
  class Model {
    private view: View

    constructor(view: View){
      this.view = view;
      this.init();
    }

    init() {
      this.getLoadFirstPage()
    }

    getLoadFirstPage() {
      this.view.showFirstPage();
    }

    closeModalWindow() {
      this.view.hiddenModalWindow();
    }

    openModalWindow() {
      this.view.showModalWindow();
    }

    checkRegistrationData() {
      if (true) {
        this.closeModalWindow();
        this.view.showStartGameButton();
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
      const addBtn = document.querySelector('#add');
      const cancelBtn = document.querySelector('#cancel');
      const regBtn = app.querySelector('#regBtn');

      // get event on modal window
      addBtn?.addEventListener('click', () => {
        this.clickAddBtnModal();
      })
      
      cancelBtn?.addEventListener('click', () => {
        this.clickCancelBtnModal();
      })
      
      // get event on aap 
      regBtn?.addEventListener('click', () => {
        this.clickNewPlayerBtn();
      })
    }
    clickNewPlayerBtn() {
      this.model.openModalWindow();
    }

    clickCancelBtnModal() {
      this.model.closeModalWindow();
    }

    clickAddBtnModal() {
      this.model.checkRegistrationData();
    }

  }

  const view = new View(app);
  const model = new Model(view);
  const controller = new Controller(app, model);
}