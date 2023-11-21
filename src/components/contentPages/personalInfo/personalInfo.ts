import { MainContent } from '../templates/contentTemplate';

class PersonalInfo extends MainContent {
  constructor() {
    super();
    this.contentSection.innerHTML = `
    <div style="color:black">Personal Info Main</div>
    `;
  }
}

export const createPersonalInfo = () => {
  return new PersonalInfo();
};
