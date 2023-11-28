import './personalInfo.css';
import { MainContent } from '../templates/contentTemplate';

class PersonalInfo extends MainContent {
  constructor(private title: string, private infoText: string) {
    super(title, infoText, false, true);
    const contentSectionPersonalInfo = document.createElement('div');
    contentSectionPersonalInfo.innerHTML = `
    <div class= "personal-info-input-section">
      <label for="name">Name</label>
      <input type="text" id="name" />
    </div>
    <div class= "personal-info-input-section">
      <label for="email">Email Address</label>
      <input type="email" id="email" />
    </div>
    <div class= "personal-info-input-section">
      <label for="tel">Phone Number</label>
      <input type="tel" id="tel" />
    </div>
    `;
    contentSectionPersonalInfo.classList.add('personal-info');
    this.contentSection.appendChild(contentSectionPersonalInfo);
  }
}

export const createPersonalInfo = () => {
  return new PersonalInfo(
    'Personal info',
    'Please provide your name, email address, and phone number.'
  );
};
