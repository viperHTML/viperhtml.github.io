const querySlotAll = (slot, css) =>
  slot.assignedNodes().filter(el => el.matches && el.matches(css));

class IronInput extends HyperHTMLElement {
  static get observedAttributes() { return ['value']; }
  created() {
    const sd = this.attachShadow({mode: 'open'});
    this.render();
    this._input = querySlotAll(sd.querySelector('#content'), 'input')[0];
  }
  attributeChangedCallback(name, prev, curr) { this._input.value = curr; }
  render() { this.html`
    <style>:host { display: inline-block; }</style>
    <slot id="content"></slot>`;
  }
}

IronInput.define('iron-input');

class EditableNameTag extends HyperHTMLElement {
  static get observedAttributes() { return ['owner']; }
  created() {
    this.render();
    this.addEventListener('input', e => {
      this.owner = e.target.value;
      this.render();
    });
  }
  render() {
    this.html`
    <p>This is <b>${this.owner}</b>'s name-tag element.</p>
    <iron-input value="${this.owner}">
      <input placeholder="Your name here...">
    </iron-input>`;
  }
}

EditableNameTag.define('editable-name-tag');