import './selectPlan.css';
import { MainContent } from '../templates/contentTemplate';

class SelectPlan extends MainContent {
  constructor(private title: string, infoText: string) {
    super(title, infoText, true, true);
    const contentSectionSelectPlan = document.createElement('div');
    contentSectionSelectPlan.innerHTML = `
    <div class= "select-plan-option-section">
      <div>Arcade</div>
      <div>Advanced</div>
      <div>Pro</div>
    </div>
    <div class= "select-plan-button-section">
      <span>Monthly</span>
      <button type="radio"></button>
      <span>Yearly</span>
    </div>
    `;
    contentSectionSelectPlan.classList.add('select-plan');
    this.contentSection.appendChild(contentSectionSelectPlan);
  }
}

export const createSelectPlan = () => {
  return new SelectPlan(
    'Select your plan',
    'You have the option of monthly or yearly billing.'
  );
};
