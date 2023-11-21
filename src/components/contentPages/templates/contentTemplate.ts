export class MainContent {
  public element: HTMLElement;
  public contentSection: HTMLElement;
  public buttonSection: HTMLElement;

  constructor(private sectionTitle: string, private sectionInfoText: string) {
    this.element = document.createElement('main');
    this.contentSection = document.createElement('section');
    this.buttonSection = document.createElement('div');

    this.element.appendChild(this.contentSection);
    this.element.appendChild(this.buttonSection);

    // content section
    this.contentSection.innerHTML = `
    <h2 style="color:black">${sectionTitle}</h2>
    <p style="color:black">${sectionInfoText}</p>
    `;

    // button section
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.innerText = 'Go Back';
    button2.innerText = 'Next Step';
    this.buttonSection.appendChild(button1);
    this.buttonSection.appendChild(button2);
  }
}
