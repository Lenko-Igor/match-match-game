import './registration-form.css';
import BaseComponent from '../../base-component';

export default class RegistrationForm extends BaseComponent{
  readonly modalWindow: HTMLElement;

  constructor(){
    super();
    this.modalWindow = this.buildModal();
  } 
  
  createBackgroundFon(): HTMLElement {
    const backgroundFon = this.createElement('div', ['modal-fon'], '');
    return backgroundFon;
  }

  createInputForm(): string {
    return `
      <form class="modal-form">
        <div class="form-block">
          <label for="firstName" class="modal-form__label">First Name</label>
          <input type="text" class="modal-form__input" name="firstName" id="firstName" required placeholder="..." value="">     
          <div class="form-block__check error"></div>   
        </div>
        <div class="form-block">
          <label for="lastName" class="modal-form__label">Last Name</label>
          <input type="text" class="modal-form__input" name="lastName" id="lastName" required placeholder="...">   
          <div class="form-block__check error"></div>      
        </div>
        <div class="form-block">
          <label for="email" class="modal-form__label">E-mail</label>
          <input type="email" class="modal-form__input" name="email" id="email" required placeholder="..."> 
          <div class="form-block__check error"></div>        
        </div>
      </form>
    `
  }

  createModalBlock(): HTMLElement {
    const modalBlock = this.createElement('section', ['modal-block'], '');

    modalBlock.innerHTML = `
      <header class="modal-header">
        <h2>Registr new Player</h2>
      </header>
      <main class="modal-main">
        ${this.createInputForm()}
        <div class="modal-avatar"></div>
      </main>
      <footer class="modal-footer">
        <button id="add" class="add disabled"><p>add user</p></button>
        <button id="cancel" class="cancel"><p>cancel</p></button>
      </footer>
    `
    return modalBlock
  }

  buildModal(): HTMLElement {
    const modalFon = this.createBackgroundFon();
    const modalBlock = this.createModalBlock();

    modalFon.append(modalBlock);
    return modalFon;
  }
  
}