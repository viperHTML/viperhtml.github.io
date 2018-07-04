// as function
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// as Class
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}