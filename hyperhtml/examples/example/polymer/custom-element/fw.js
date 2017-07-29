class CustomElement extends Polymer.Element {
  static get is() { return "custom-element"; }
  constructor() {
    super();
    this.textContent = "I'm a custom-element.";
  }
}

customElements.define(CustomElement.is, CustomElement);