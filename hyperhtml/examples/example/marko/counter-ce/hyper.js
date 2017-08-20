class HyperCounter extends HyperHTMLElement {
  get style () { return `
    .count {
      color:#09c;
      font-size:3em;
    }
    .example-button {
      font-size:1em;
      padding:0.5em;
    }`;
  }
  created() {
    this.state = {count: 0};
    this.attachShadow({mode: 'open'});
    this.update();
  }
  onclick() {
    this.state.count++;
    this.update();
  }
  update() { this.html`
    <style>${this.style}</style>
    <div class=count>${this.state.count}</div>
    <button class=example-button onclick=${this}>
      Click me!
    </button>`;
  }
}

HyperCounter.define('h-counter');