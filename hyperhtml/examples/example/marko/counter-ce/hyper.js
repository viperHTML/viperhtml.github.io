class HyperCounter extends HyperHTMLElement {
  get style () {
    return `
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
    this.attachShadow({mode: 'open'});
    this.setState({count: 0});
  }
  onclick() {
    this.setState(prev => ({count: prev.count + 1}));
  }
  render() {
    return this.html`
    <style>${this.style}</style>
    <div class=count>${this.state.count}</div>
    <button class=example-button onclick=${this}>
      Click me!
    </button>`;
  }
}

HyperCounter.define('h-counter');