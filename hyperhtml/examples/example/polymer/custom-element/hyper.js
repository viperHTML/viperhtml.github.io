class CustomElement extends HyperHTMLElement {
  created() {
    this.textContent = "I'm a custom-element.";
  }
}

CustomElement.define('custom-element');