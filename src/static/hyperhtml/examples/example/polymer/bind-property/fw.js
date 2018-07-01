/* This is a: <link rel="import" href="editable-name-tag.html">
<link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
<link rel="import"  href="https://polygit.org/components/iron-input/iron-input.html">
<dom-module id="editable-name-tag">
  <template>
    <p>This is <b>[[owner]]</b>'s name-tag element.</p>
    <iron-input bind-value="{{owner}}">
      <input is="iron-input" placeholder="Your name here...">
    </iron-input>
  </template>
  <script>
  */
    class EditableNameTag extends Polymer.Element {
      static get is() { return "editable-name-tag"; }
      static get properties() {
        return {
          owner: {
            type: String,
            value: 'Daniel'
          }
        };
      }
    }

    customElements.define(EditableNameTag.is, EditableNameTag);
  /*
  </script>
</dom-module>
*/