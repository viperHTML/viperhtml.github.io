/* This is a: <link rel="import" href="employee-list.html">
<link rel="import"  href="https://polygit.org/components/polymer/polymer-element.html">
<link rel="import"  href="https://polygit.org/components/polymer/lib/elements/dom-repeat.html">
<dom-module id="employee-list">
  <template>
    <div> Employee list: </div>
    <p></p>
    <template is="dom-repeat" items="{{employees}}">
        <div>First name: <span>{{item.first}}</span></div>
        <div>Last name: <span>{{item.last}}</span></div>
        <p></p>
    </template>
  </template>
  <script>
  */
    class EmployeeList extends Polymer.Element {
      static get is() { return "employee-list"; }

      constructor() {
        super();
        this.employees = [
          {first: 'Bob', last: 'Li'},
          {first: 'Ayesha', last: 'Johnson'},
          {first: 'Fatma', last: 'Kumari'},
          {first: 'Tony', last: 'Morelli'}
        ]; 
      }
    }

    customElements.define(EmployeeList.is, EmployeeList);
  /*
  </script>
</dom-module>
*/