var data = {message: 'You loaded this page on ' + new Date()};
hyperHTML.bind(document.querySelector('#app'))`
<span title="${data.message}">
  Hover your mouse over me for a few seconds
  to see my dynamically bound title!
</span>`;

/*
<div id="app"></div>
*/