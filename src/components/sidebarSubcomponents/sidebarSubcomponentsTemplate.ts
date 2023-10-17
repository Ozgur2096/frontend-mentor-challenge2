export class Step {
  public element: Element;

  constructor(
    private stepNumber: number,
    private stepNumberText: string,
    private title: string,
    private stepClassName: string
  ) {
    this.element = document.createElement('div');
    this.element.innerHTML = `
    <div>${this.stepNumber}</div>
    <div>${this.stepNumberText}</div>
    <div>${this.title}</div>
    `;
    this.element.classList.add(stepClassName);
  }
}
