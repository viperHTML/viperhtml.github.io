// style defined as CSS
class Counter {
  constructor() {
    this.state = {count: 0};
    return this.update();
  }
  handleEvent() {
    this.state.count++;
    this.update();
  }
  update() {
    return hyperHTML.wire(this)`
    <div class=count>${this.state.count}</div>
    <button class=example-button onclick=${this}>
      Click me!
    </button>`;
  }
}

hyperHTML.bind(document.body)
  `${new Counter}`;