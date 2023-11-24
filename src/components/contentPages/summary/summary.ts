import { MainContent } from '../templates/contentTemplate';

class Summary extends MainContent {
  constructor(private title: string, infoText: string) {
    super(title, infoText, true, false);
  }
}

export const createSummary = () => {
  return new Summary(
    'Finishing up',
    'Double-check everything looks OK before confirming.'
  );
};
