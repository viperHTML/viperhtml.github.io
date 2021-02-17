function UserGreeting() {
  return hyperHTML.wire()`
  <h1>Welcome back!</h1>`;
}

function GuestGreeting() {
  return hyperHTML.wire()`
  <h1>Please sign up.</h1>`;
}

function Greeting(isLoggedIn) {
  return isLoggedIn ?
    UserGreeting() :
    GuestGreeting();
}

function LoginButton(clickHandler) {
  return hyperHTML.wire(clickHandler)`
  <button onclick="${clickHandler}">
    Login
  </button>`;
}

function LogoutButton(clickHandler) {
  return hyperHTML.wire(clickHandler)`
  <button onclick="${clickHandler}">
    Logout
  </button>`;
}

class LoginControl extends HTMLElement {
  constructor(...args) {
    super(...args).html = hyperHTML.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  connectedCallback() { this.setState({isLoggedIn: false}); }
  setState(state) { this.state = state; this.render(); }
 
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return this.html`
    <div>${[
      Greeting(isLoggedIn),
      isLoggedIn ?
        LogoutButton(this.handleLogoutClick) :
        LoginButton(this.handleLoginClick)
    ]}</div>`;
  }
}

customElements.define('login-control', LoginControl);

document
  .getElementById('root')
  .appendChild(new LoginControl);