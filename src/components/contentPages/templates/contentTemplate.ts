export class MainContent {
  public element: HTMLElement;
  public contentSection: HTMLElement;
  public buttonSection: HTMLElement;

  constructor() {
    this.element = document.createElement('main');
    this.contentSection = document.createElement('section');
    this.buttonSection = document.createElement('div');

    this.element.appendChild(this.contentSection);
    this.element.appendChild(this.buttonSection);

    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.innerText = 'Go Back';
    button2.innerText = 'Next Step';
    this.buttonSection.appendChild(button1);
    this.buttonSection.appendChild(button2);
  }
}
