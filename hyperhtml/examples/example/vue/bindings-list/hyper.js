const App = {
    html: hyperHTML.bind(document.querySelector('#app')),
    data: {message: 'Hello hyperHTML!'},
    handleEvent(event) {
      this.data.message = event.target.value;
      this.render();
    },
    render() {
      this.html`<p> ${this.data.message}</p>
      <input value="${this.data.message}" oninput="${this}">`;
    }
  };
  App.render();


const App = {
  html: hyperHTML.bind(document.querySelector("#app")),
  wires: [],
  getWire(i) {
    return (this.wires[i] || (this.wires[i] = hyperHTML.wire()));
  },
  data: {
    inputs: ["a", "b", "c"]
  },
  onInput(event, index) {
    this.data.inputs[index] = event.target.value;
    this.render();
  },
  render() {
    this.html`${this.data.inputs.map((inp, index) => this.getWire(index)`
      <input value="${inp}" oninput="${e => this.onInput(e, index)}"><br>
    `)}${JSON.stringify(this.data.inputs)}`;
  }
};
App.render();

/*
  <div id="app"></div>
*/
