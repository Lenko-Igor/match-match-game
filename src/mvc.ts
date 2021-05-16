import BaseComponent from './base-component'; 
import AboutPage from './pages/about/about';
import RegistrationForm from './pages/registration/registration-form';


export default function mvc(app: HTMLElement) {
  // View
  class View {
    readonly app: HTMLElement;
    readonly modalFeild: HTMLElement;
    readonly modalWindow: HTMLElement;

    constructor(app: HTMLElement) {
      this.app = app;
      this.modalFeild = new BaseComponent().createElement('div', ['modal-feild'], '');
      this.modalWindow = new RegistrationForm().modalWindow;
      this.init();
      this.showPage(); 
    }
    
    init() {
      this.modalFeild.append(this.modalWindow);
      this.app.before(this.modalFeild);
    }

    showPage() {
      new AboutPage(this.app, false);
    }
  }
  // Model
  class Model {
    private view: object

    constructor(view: object){
      this.view = view;
    }
  }

  // Controller
  class Controller {
    readonly app: HTMLElement
    private model: object

    constructor(app: HTMLElement, model: object){
      this.app = app;
      this.model = model;
    }
  }

  const view = new View(app);
  const model = new Model(view);
  const controller = new Controller(app, model);
}