import './addOns.css';
import { MainContent } from '../templates/contentTemplate';

class AddOns extends MainContent {
  constructor(private title: string, private infoText: string) {
    super(title, infoText, true, true);
    const contentSectionAddOns = document.createElement('div');
    contentSectionAddOns.innerHTML = `
    <div class= "add-ons-option-section">Online service</div>
    <div class= "add-ons-option-section">Larger storage</div>
    <div class= "add-ons-option-section">Customizable Profile</div>
    `;
    contentSectionAddOns.classList.add('add-ons');
    this.contentSection.appendChild(contentSectionAddOns);
  }
}

export const createAddOns = () => {
  return new AddOns(
    'Pick add-ons',
    'Add-ons help enhance your gaming experience.'
  );
};
