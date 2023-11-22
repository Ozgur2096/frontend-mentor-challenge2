// create main sidebar
import './sidebar.css';

export const createSidebar = (stepElements: HTMLElement[]) => {
  const element = document.createElement('aside');
  element.classList.add('sidebar');

  function handleStepElementClick(event: Event) {
    const target = event.currentTarget as HTMLElement;
    console.log(target.id);
  }

  stepElements.forEach((stepElement, index) => {
    stepElement.id = index.toString();
    stepElement.addEventListener('click', e => {
      handleStepElementClick(e);
    });
    console.log(stepElement.id);
    element.appendChild(stepElement);
  });

  return element;
};
