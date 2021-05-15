import AboutPage from './pages/about/about'

export default function mvc(wrap: HTMLElement) {
  // View
  class View {
    readonly wrap: HTMLElement

    constructor(wrap: HTMLElement) {
      this.wrap = wrap;
      this.showPage() 
    }

    showPage() {
      const aboutPage = new AboutPage();
      this.wrap.prepend(aboutPage.header);
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
    readonly wrap: HTMLElement
    private model: object

    constructor(wrap: HTMLElement, model: object){
      this.wrap = wrap;
      this.model = model;
    }
  }

  const view = new View(wrap);
  const model = new Model(view);
  const controller = new Controller(wrap, model);
}