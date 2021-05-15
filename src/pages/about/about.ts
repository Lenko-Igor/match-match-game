//import CreateElement from '../../create-element';
import Header from '../../components/header/header';

export default class AboutPage {
  readonly header: HTMLElement

  constructor() {
    this.header = new Header().feild;
  }
}