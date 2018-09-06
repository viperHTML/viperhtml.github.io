class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.user.name}</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome user={{ name: 'Sara' }} />
      <Welcome user={{ name: 'Cahal' }} />
      <Welcome user={{ name: 'Edite' }} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
