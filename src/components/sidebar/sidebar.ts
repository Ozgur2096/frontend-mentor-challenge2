// create main sidebar
import './sidebar.css';

export const createSidebar = (stepsArray: string[]) => {
  const element = document.createElement('aside');

  element.classList.add('sidebar');
  element.innerHTML = `${stepsArray.join('')}`;

  return element;
};
