class HyperClock extends HyperElement {
  // HyperElement as proof of concept
  // https://gist.github.com/WebReflection/cb31fccf6668e69896fb7b3eb6c1b916
  connectedCallback() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  disconnectedCallback() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return this.html`
    <div>
      <h1>Hello, world!</h1>
      <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
    </div>`;
  }
}

customElements.define('x-clock', HyperClock);

document
  .getElementById('root')
  .appendChild(new HyperClock);