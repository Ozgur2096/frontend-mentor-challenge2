import { MainContent } from '../templates/contentTemplate';

class Summary extends MainContent {
  constructor() {
    super();
    this.contentSection.innerHTML = `
    <div style="color:black">Summary Main</div>
    `;
  }
}

export const createSummary = () => {
  return new Summary();
};
