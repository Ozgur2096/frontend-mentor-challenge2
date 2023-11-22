// create main sidebar
import './sidebar.css';
import { createMainContent } from '../contentPages/templates/mainContent';
import { useStateManagement } from '../../util/useStateManagement';

export const createSidebar = (stepElements: HTMLElement[]) => {
  const element = document.createElement('aside');
  element.classList.add('sidebar');
  const [stepElementId, setStepElementId] = useStateManagement<string>('8');

  function handleStepElementClick(event: Event) {
    const target = event.currentTarget as HTMLElement;
    console.log(target.id);
    setStepElementId(target.id);
    console.log(stepElementId);
  }

  stepElements.forEach((stepElement, index) => {
    stepElement.id = index.toString();
    stepElement.addEventListener('click', e => {
      handleStepElementClick(e);
    });
    element.appendChild(stepElement);
  });

  return element;
};
