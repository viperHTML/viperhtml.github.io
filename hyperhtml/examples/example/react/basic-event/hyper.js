function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return hyperHTML.wire()`
  <a href="#" onclick="${handleClick}">
    Click me
  </a>`;
}