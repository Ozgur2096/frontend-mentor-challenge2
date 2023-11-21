import { createPersonalInfo } from '../personalInfo/personalInfo';
import { createSelectPlan } from '../selectPlan/selectPlan';
import { createAddOns } from '../addOns/addOns';
import { createSummary } from '../summary/summary';

const personalInfoSection = createPersonalInfo();
const selectPlanSection = createSelectPlan();
const addOnsSection = createAddOns();
const summarySection = createSummary();
const contentPages: HTMLElement[] = [
  personalInfoSection.element,
  selectPlanSection.element,
  addOnsSection.element,
  summarySection.element,
];

export const createMainContent = () => {
  const element = contentPages[0] as HTMLElement;

  return element;
};
