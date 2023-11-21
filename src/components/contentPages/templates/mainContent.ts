import { createPersonalInfo } from '../personalInfo/personalInfo';

const contentPages: HTMLElement[] = [];
const personalInfoPage = createPersonalInfo();

contentPages.push(personalInfoPage.element);

export const createMainContent = () => {
  const element = contentPages[0] as HTMLElement;

  return element;
};
