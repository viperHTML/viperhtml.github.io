// as function
function Welcome(props) {
  return hyperHTML.wire()`
  <h1>Hello, ${props.name}</h1>`;
}

// as Class (not a Custom Element)
class Welcome {
  constructor(props) { this.props = props; }
  render() {
    return hyperHTML.wire(this)`
    <h1>Hello, ${this.props.name}</h1>`;
  }
}