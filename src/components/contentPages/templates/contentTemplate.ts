import { createAndRenderPage } from '../../../index';
import {
  managePageContentIndex,
  pageContent,
} from '../../../util/managePageContentIndex';

export class MainContent {
  public element: HTMLElement;
  public contentSection: HTMLElement;
  public buttonSection: HTMLElement;

  constructor(
    private sectionTitle: string,
    private sectionInfoText: string,
    private showGoBackButton: boolean,
    private showNextStepButton: boolean
  ) {
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
    function goBack() {
      pageContent.index--;
      createAndRenderPage(pageContent.index.toString());
      console.log(pageContent.index);
    }

    function nextStep() {
      pageContent.index++;
      createAndRenderPage(pageContent.index.toString());
      console.log(pageContent.index);
    }

    if (showGoBackButton) {
      const button1 = document.createElement('button');
      button1.addEventListener('click', () => {
        console.log('go back');
        goBack();
      });
      button1.innerText = 'Go Back';
      this.buttonSection.appendChild(button1);
    }
    if (showNextStepButton) {
      const button2 = document.createElement('button');
      button2.addEventListener('click', () => {
        console.log('next step');
        nextStep();
      });
      button2.innerText = 'Next Step';
      this.buttonSection.appendChild(button2);
    }
  }
}
