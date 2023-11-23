// For styling, go to sidebar.css
export class Step {
  public element: HTMLElement;

  constructor(
    private stepNumber: number,
    private stepNumberText: string,
    private title: string,
    private stepClassName: string
  ) {
    this.element = document.createElement('div');
    this.element.innerHTML = `
    <div class="sidebar-step-number">${this.stepNumber}</div>
    <div>
    <div>${this.stepNumberText.toUpperCase()}</div>
    <div>${this.title.toUpperCase()}</div>
    </div>
    `;
    this.element.classList.add(stepClassName);
  }
}
