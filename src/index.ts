import './index.css';
import { createSidebar } from './components/sidebar/sidebar';
import { stepElements } from './components/sidebarSubcomponents/sidebarSubcomponents';

// import { createPersonalInfo } from './components/contentPages/personalInfo/personalInfo';
import { createMainContent } from './components/contentPages/templates/mainContent';

const sidebar = createSidebar(stepElements);

export function createAndRenderPage(pageIndex: string) {
  const container = document.getElementById('container');

  container?.classList.add('container');

  const mainContent = createMainContent(pageIndex);

  container!.innerHTML = '';
  container?.appendChild(sidebar);
  container?.appendChild(mainContent);
}

createAndRenderPage('0');
