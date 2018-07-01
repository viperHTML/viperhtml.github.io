const {bind:hyper, wire} = hyperHTML;
const data = {
  todos: [
    { text: 'Use JavaScript, HTML, CSS' },
    { text: 'Learn hyperHTML' },
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