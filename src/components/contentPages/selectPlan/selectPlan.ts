import { MainContent } from '../templates/contentTemplate';

class SelectPlan extends MainContent {
  constructor() {
    super();
    this.contentSection.innerHTML = `
    <div style="color:black">Select Plan Main</div>
    `;
  }
}

export const createSelectPlan = () => {
  return new SelectPlan();
};
