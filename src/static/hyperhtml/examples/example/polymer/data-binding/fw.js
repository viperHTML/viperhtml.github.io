/* This is a: <link rel="import" href="name-tag.html">
<link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
<dom-module id="name-tag">
  <template>
    This is <b>{{owner}}</b>'s name-tag element.
  </template>
  <script>
  */
    class NameTag extends Polymer.Element {
      static get is() { return "name-tag"; }
      constructor() {
        super();
        this.owner = "Daniel";
      }
    }

    customElements.define(NameTag.is, NameTag);
  /*
  </script>
</dom-module>
*/