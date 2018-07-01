class EmployeeList extends HyperHTMLElement {
  created() {
    this.employees = [
      {first: 'Bob', last: 'Li'},
      {first: 'Ayesha', last: 'Johnson'},
      {first: 'Fatma', last: 'Kumari'},
      {first: 'Tony', last: 'Morelli'}
    ];
    this.render();
  }
  render() {
    this.html`
    <div> Employee list: </div>
    <p></p>${this.employees.map(
      employee => hyperHTML.wire(employee)`
      <div>First name: <span> ${employee.first} </span></div>
      <div>Last name: <span> ${employee.last} </span></div>
      <p></p>`
    )}`;
  }
}

EmployeeList.define('employee-list');