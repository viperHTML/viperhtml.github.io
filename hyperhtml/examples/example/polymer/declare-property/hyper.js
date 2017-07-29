// ℹ️ on DOM attributes can only be strings so
//    HyperHTMLElement doesn't care, neither guarantee,
//    types are preserved or anything: will. be. strings.
class ConfigurableNameTag extends HyperHTMLElement {
  static get observedAttributes() { return ['owner']; }
  created() { this.render(); }
  render() {
    this.html`
    This is <b>${this.owner}</b>'s name-tag element.`;
  }
}

ConfigurableNameTag.define('configurable-name-tag');