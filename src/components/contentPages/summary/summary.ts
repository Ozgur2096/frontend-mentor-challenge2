import './summary.css';
import { MainContent } from '../templates/contentTemplate';

class Summary extends MainContent {
  constructor(private title: string, infoText: string) {
    super(title, infoText, true, false);

    const contentSectionSummary = document.createElement('div');
    contentSectionSummary.innerHTML = `
    <div class= "summary-price-section">
      <div class="summary-text">
        <div>Arcade (Monthly)</div>
        <a href="#">Change</a>
      </div>
      <div class="summary-price">$9/mo</div>
    </div>
    <div class= "summary-price-section">
      <div class="summary-text">Online service</div>
      <div class="summary-price">+$1/mo</div>
    </div>
    <div class= "summary-price-section">
      <div class="summary-text">Larger Storage</div>
      <div class="summary-price">+$2/mo</div>
    </div>
    <div class= "summary-price-section">
      <div class="summary-text">Total (per month)</div>
      <div class="summary-price">+$12/mo</div>
    </div>
    `;
    contentSectionSummary.classList.add('summary');
    this.contentSection.appendChild(contentSectionSummary);

    const confirmButton = document.createElement('button');
    confirmButton.innerText = 'Confirm';
    confirmButton.classList.add('confirm-button');
    this.buttonSection.appendChild(confirmButton);
  }
}

export const createSummary = () => {
  return new Summary(
    'Finishing up',
    'Double-check everything looks OK before confirming.'
  );
};
