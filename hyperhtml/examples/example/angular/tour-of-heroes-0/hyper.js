class AppComponent {
  constructor() {
    this.title = 'Tour of Heroes';
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };
    this.render();
  }
  handleEvent(e) {
    this.hero.name = e.target.value;
    this.render();
  }
  render() {
    const hero = this.hero;
    hyperHTML.bind(document.querySelector('my-app'))`
    <h1> ${this.title} </h1>
    <h2> ${hero.name} details!</h2>
    <div><label>id: </label> ${hero.id}</div>
    <div>
      <label>name: </label>
      <input value="${hero.name}" oninput="${this}" placeholder="name">
    </div>`;
  }
}