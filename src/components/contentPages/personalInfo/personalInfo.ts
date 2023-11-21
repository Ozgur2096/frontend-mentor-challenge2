import { MainContent } from '../templates/contentTemplate';

class PersonalInfo extends MainContent {
  constructor(private title: string, private infoText: string) {
    super(title, infoText);
    const deneme = document.createElement('div');
    deneme.innerHTML = `
    <div style="color:black">append deneme</div>
    `;
    this.contentSection.appendChild(deneme);
  }
}

export const createPersonalInfo = () => {
  return new PersonalInfo(
    'Personal info',
    'Please provide your name, email address, and phone number.'
  );
};
