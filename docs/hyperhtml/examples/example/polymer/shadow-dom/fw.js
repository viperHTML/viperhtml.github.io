/* This is a: <link rel="import" href="dom-element.html">
<link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
<dom-module id="dom-element">
  <template>
    <p>I'm a DOM element. This is my shadow DOM!</p>
  </template>
  <script>
  */
    class DomElement extends Polymer.Element {
      static get is() { return "dom-element"; }
    }

    customElements.define(DomElement.is, DomElement);
  /*
  </script>
</dom-module>
*/