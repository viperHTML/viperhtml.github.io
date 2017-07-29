class PictureFrame extends HyperHTMLElement {
  created() {
    this.attachShadow({mode: 'open'});
    this.render();
  }
  render() {
    this.html`
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
    </div>`;
  }
}

PictureFrame.define('picture-frame');