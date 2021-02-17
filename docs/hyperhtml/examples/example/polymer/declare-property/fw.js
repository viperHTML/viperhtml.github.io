/* This is a: <link rel="import" href="configurable-name-tag.html">
<link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
<dom-module id="configurable-name-tag">
  <template>
    This is <b>[[owner]]</b>'s name-tag element.
  </template>
  <script>
  */
    class ConfigurableNameTag extends Polymer.Element {
      static get is() { return "configurable-name-tag"; }
      static get properties() {
        return {
          owner: {
            type: String,
            value: "Daniel",
          }
        };
      }
    }

    customElements.define(ConfigurableNameTag.is, ConfigurableNameTag);
  /*
  </script>
</dom-module>
*/