class DomElement extends HyperHTMLElement {
  created() {
    this.attachShadow({mode: 'open'});
    this.render();
  }
  render() {
    this.html`
    <p>I'm a DOM element. This is my shadow DOM!</p>`;
  }
}

DomElement.define('dom-element');