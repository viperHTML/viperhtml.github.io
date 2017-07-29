/* This is a: <link rel="import" href="picture-frame.html">
<link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
<dom-module id="picture-frame">
  <template>
    <style>
      div {
        display: inline-block;
        background-color: #ccc;
        border-radius: 8px;
        padding: 4px;
      }
    </style>
    <div>
      <slot></slot>
    </div>
  </template>
  <script>
  */
    class PictureFrame extends Polymer.Element {
      static get is() { return "picture-frame"; }
    }
    customElements.define(PictureFrame.is, PictureFrame);
  /*
  </script>
</dom-module>
*/