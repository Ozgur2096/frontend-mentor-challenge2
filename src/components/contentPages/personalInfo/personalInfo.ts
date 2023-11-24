import { MainContent } from '../templates/contentTemplate';

class PersonalInfo extends MainContent {
  constructor(private title: string, private infoText: string) {
    super(title, infoText, false, true);
  }
}

export const createPersonalInfo = () => {
  return new PersonalInfo(
    'Personal info',
    'Please provide your name, email address, and phone number.'
  );
};
