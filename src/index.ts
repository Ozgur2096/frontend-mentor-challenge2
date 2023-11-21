import './index.css';
import { createSidebar } from './components/sidebar/sidebar';
import { stepElements } from './components/sidebarSubcomponents/sidebarSubcomponents';

// import { createPersonalInfo } from './components/contentPages/personalInfo/personalInfo';
import { createMainContent } from './components/contentPages/templates/mainContent';

const container = document.getElementById('container');

container?.classList.add('container');

const sidebar = createSidebar(stepElements);
const mainContent = createMainContent();

container?.appendChild(sidebar);
container?.appendChild(mainContent);
