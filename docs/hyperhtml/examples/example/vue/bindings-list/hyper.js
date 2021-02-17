const App = {
  html: hyperHTML.bind(document.querySelector("#app")),
  data: {inputs: ["a", "b", "c"]},
  onInput(event, index) {
    this.data.inputs[index] = event.target.value;
    this.render();
  },
  render() {
    this.html`${this.data.inputs.map(
      (inp, index) => hyperHTML.wire(this, ':' + index)`
      <input value=${inp} oninput=${e => this.onInput(e, index)}><br>`
    )}${JSON.stringify(this.data.inputs)}`;
  }
};
App.render();

/*
  <div id="app"></div>
*/
