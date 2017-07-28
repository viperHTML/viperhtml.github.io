var data = {seen: true};
hyperHTML.bind(document.querySelector('#app'))`${
  [].concat(data.seen
    ? '<p>Now you see me</p>'
    : [])
}`;

/*
<div id="app"></div>
*/