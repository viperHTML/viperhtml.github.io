const {bind:hyper, wire} = hyperHTML;
const App = {
  html: hyper(document.querySelector('#app')),
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  },
  render() { this.html`
    <ol>
    ${this.data.groceryList.map(
      todo => wire(todo)`
      <li data-id=${todo.id}>${todo.text}</li>`
    )}
    </ol>`;
  }
};
App.render();

/*
<div id="app"></div>
*/