class Toggle extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.state = {isToggleOn: true};
  }

  // standard W3C EventListener behavior
  handleEvent() {
    this.state.isToggleOn = !this.state.isToggleOn;
  }

  render() {
    return this.html`
    <button onclick="${this}">
      ${this.state.isToggleOn ? 'ON' : 'OFF'}
    </button>`;
  }
}