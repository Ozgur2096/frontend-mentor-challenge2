import './index.css';
import { createSidebar } from './components/sidebar/sidebar';

const dummyArray = [
  '<div>a</div>',
  '<div>b</div>',
  '<div>c</div>',
  '<div>d</div>',
  '<div>e</div>',
];

const container = document.getElementById('container');

container?.classList.add('container');

const sidebar = createSidebar(dummyArray);

container?.appendChild(sidebar);
