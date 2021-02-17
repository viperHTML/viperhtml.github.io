var data = {message: 'Hello hyperHTML!'};
hyperHTML.bind(document.querySelector('#app'))`
  ${data.message}
`;

/*
<div id="app"></div>
*/