import { MainContent } from '../templates/contentTemplate';

class AddOns extends MainContent {
  constructor(private title: string, private infoText: string) {
    super(title, infoText);
  }
}

export const createAddOns = () => {
  return new AddOns(
    'Pick add-ons',
    'Add-ons help enhance your gaming experience.'
  );
};
