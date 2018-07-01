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

/*
<div id="app"></div>
*/