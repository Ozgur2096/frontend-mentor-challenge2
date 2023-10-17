import { Step } from './sidebarSubcomponentsTemplate';

// For styling, go to sidebar.css

const step1 = new Step(1, 'Step 1', 'Your info', 'sidebar-step');
const step2 = new Step(2, 'Step 2', 'Select', 'sidebar-step');
const step3 = new Step(3, 'Step 3', 'Add-ons', 'sidebar-step');
const step4 = new Step(4, 'Step 4', 'Summary', 'sidebar-step');

export const stepElements = [
  step1.element,
  step2.element,
  step3.element,
  step4.element,
];
