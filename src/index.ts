import './index.css';
import { createSidebar } from './components/sidebar/sidebar';
import { stepElements } from './components/sidebarSubcomponents/sidebarSubcomponents';

const container = document.getElementById('container');

container?.classList.add('container');

const sidebar = createSidebar(stepElements);

container?.appendChild(sidebar);
