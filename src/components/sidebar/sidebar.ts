// create main sidebar
import './sidebar.css';

export const createSidebar = (stepElements: Element[]) => {
  const element = document.createElement('aside');

  element.classList.add('sidebar');

  stepElements.forEach(stepElement => element.appendChild(stepElement));

  return element;
};
