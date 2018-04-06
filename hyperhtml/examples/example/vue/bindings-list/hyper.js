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
