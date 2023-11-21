import { MainContent } from '../templates/contentTemplate';

class AddOns extends MainContent {
  constructor() {
    super();
    this.contentSection.innerHTML = `
    <div style="color:black">Add-ons Main</div>
    `;
  }
}

export const createAddOns = () => {
  return new AddOns();
};
