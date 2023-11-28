import './selectPlan.css';
import { MainContent } from '../templates/contentTemplate';

class SelectPlan extends MainContent {
  constructor(private title: string, infoText: string) {
    super(title, infoText, true, true);
  }
}

export const createSelectPlan = () => {
  return new SelectPlan(
    'Select your plan',
    'You have the option of monthly or yearly billing.'
  );
};
