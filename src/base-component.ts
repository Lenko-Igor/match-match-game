export default class BaseComponent {
  
  constructor(){}

  createElement(teg: string, classStyle: string[], id: string): HTMLElement {
    const element = document.createElement(teg);
    
    if (classStyle.length) {
      element.classList.add(...classStyle);
    }; 
    
    if (id) {
      element.id = id;
    }
    
    return element;
  }

}