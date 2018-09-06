customElements.define(
  'h-welcome',
  class HyperWelcome extends HTMLElement {
    constructor(...args) {
      super(...args);
      this.html = hyperHTML.bind(this);
    }

    get user() { return this._user; }
    set user(value) {
      this._user = value;
      this.render();
    }

    connectedCallback() { this.render(); }
    render() {
      return this.html`<h1>Hello, ${this._user.name}</h1>`;
    }
  }
);

hyperHTML.bind(document.getElementById('root'))`
  <h-welcome user=${{ name: 'Sara' }} />
  <h-welcome user=${{ name: 'Cahal' }} />
  <h-welcome user=${{ name: 'Edite' }} />
`;
