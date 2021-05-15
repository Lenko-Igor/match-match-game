export default class CreateElement {
  readonly teg: string;
  readonly class: string[];
  readonly id: string;
  readonly element: HTMLElement;

  constructor(nameTeg: string, nameClass: string[], id: string) {
    this.teg = nameTeg;
    this.class = nameClass;
    this.id = id;
    this.element = this.createElement();
  }

  createElement(): HTMLElement {
    const element = document.createElement(this.teg);
    
    if (this.class.length) {
      element.classList.add(...this.class);
    }; 
    
    if (this.id) {
      element.id = this.id;
    }
    
    return element;
  }
}