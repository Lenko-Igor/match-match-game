import './styles/styles.css';
import mvc from './mvc';
import BaseComponent from './base-component';

window.onload = () => {
  const element = new BaseComponent();
  const app = element.createElement('div', [], 'app');
  
  document.body.prepend(app);
  mvc(app);
}

