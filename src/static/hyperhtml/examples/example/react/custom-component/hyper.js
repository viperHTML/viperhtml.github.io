customElements.define(
  'h-welcome',
  class HyperWelcome extends HTMLElement {
    constructor(...args) {
      super(...args);
      this.html = hyperHTML.bind(this);
    }
    connectedCallback() { this.render(); }
    render() {
      return this.html`
      <h1>Hello, ${this.getAttribute('name')}</h1>`;
    }
  }
);

hyperHTML.bind(document.getElementById('root'))`
  <h-welcome name="Sara"></h-welcome>
  <h-welcome name="Cahal"></h-welcome>
  <h-welcome name="Edite"></h-welcome>
`;