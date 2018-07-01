var title = 'My First hyperHTML App';
hyperHTML.bind(document.body)`
<style>
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
</style>
<h1> ${title} </h1>`;