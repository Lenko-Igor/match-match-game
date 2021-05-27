import './registration-form.css';
import BaseComponent from '../../base-component';

export default class RegistrationForm extends BaseComponent{
  readonly modalWindow: HTMLElement;
  readonly backgroundFon: HTMLElement;
  readonly modalRegistrationBlock: HTMLElement;
  readonly modalWinBlock: HTMLElement;
  readonly titleWinBlock: HTMLElement
  private score: number;

  constructor(){
    super();
    this.backgroundFon = this.createElement('div', ['modal-fon'], '');
    this.modalRegistrationBlock = this.createElement('section', ['modal-registration-block'], '');
    this.modalWinBlock = this.createElement('section', ['modal-win-block'], '');
    this.titleWinBlock = this.createElement('h2', ['modal-win-title'], '');
    this.modalWindow = this.buildModal();
    this.score = 0;
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

  createRegistrationBlock(): HTMLElement {
    this.modalRegistrationBlock.innerHTML = `
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
    return this.modalRegistrationBlock
  }

  createWinBlock(): HTMLElement {
    this.modalWinBlock.innerHTML = `
      <p class="win-text">Congratulations! You successfully found all matches.</p>
      <button class="win-button" id="win">
        <p class="win-button__text">OK</p>
      </button>
    `
    this.modalWinBlock.prepend(this.titleWinBlock);
    return this.modalWinBlock;
  }

  buildModal(): HTMLElement {
    this.backgroundFon.append(this.createRegistrationBlock());
    this.backgroundFon.append(this.createWinBlock());
    return this.backgroundFon;
  }
  
  openModalRegistration() {
    this.backgroundFon.classList.add('modal-fon_active');
    this.modalRegistrationBlock.classList.add('active');
  }

  closeModalRegistration() {
    this.backgroundFon.classList.remove('modal-fon_active');
    this.modalRegistrationBlock.classList.remove('active');
  }

  openModalWin(score: number) {
    this.titleWinBlock.innerHTML = `
    You score: 
    <span>${score}</span>
    `;
    this.backgroundFon.classList.add('modal-fon_active');
    this.modalWinBlock.classList.add('active');
  }

  closeModalWin() {
    this.backgroundFon.classList.remove('modal-fon_active');
    this.modalWinBlock.classList.remove('active');
  }
}