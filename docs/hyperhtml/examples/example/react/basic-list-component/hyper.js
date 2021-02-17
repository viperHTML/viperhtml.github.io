function NumberList(numbers) {
  return hyperHTML.wire(numbers)`
  <ul>${numbers.map((number, i) =>
    hyperHTML.wire(numbers, ':li-' + i)`
    <li> ${number} </li>`)
  }</ul>`;
}

const numbers = [1, 2, 3, 4, 5];

document
  .getElementById('root')
  .appendChild(NumberList(numbers));