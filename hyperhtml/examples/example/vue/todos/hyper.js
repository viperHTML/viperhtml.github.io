const {bind:hyper, wire} = hyperHTML;
const data = {
  todos: [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
  ]
};
hyper(document.querySelector('#app'))`
<ol>${data.todos.map(todo => wire(todo)`
  <li> ${todo.text} </li>`
)}</ol>`;

/*
<div id="app"></div>
*/