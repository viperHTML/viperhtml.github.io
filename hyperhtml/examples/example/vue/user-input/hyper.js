const App = {
  html: hyperHTML.bind(document.querySelector('#app')),
  data: {message: 'Hello hyperHTML!'},
  handleEvent(event) {
    this.data.message = this.data.message.split('').reverse().join('');
    this.render();
  },
  render() {
    this.html`
    <p> ${this.data.message} </p>
    <button onclick="${this}">Reverse Message</button>`;
  }
};
App.render();

/*
<div id="app"></div>
*/