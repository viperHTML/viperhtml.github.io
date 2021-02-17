class NameTag extends HyperHTMLElement {
  created() {
    this.owner = 'Andrea';
    this.render();
  }
  render() {
    this.html`
    This is <b>${this.owner}</b>'s name-tag element.`;
  }
}

PictureFrame.define('name-tag');