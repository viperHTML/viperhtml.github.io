const HEROES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

class AppComponent {
  render() {
    const wire = hyperHTML.wire;
    const selectedHero = this.selectedHero;
    hyperHTML.bind(document.querySelector('my-app'))`
    <style>${AppComponent.styles}</style>
    <h1> ${this.title} </h1>
    <h2>My Heroes</h2>
    <ul class="heroes">${this.heroes.map(
      hero => wire(hero)`
      <li
        class="${hero === selectedHero ? 'selected' : ''}"
        data-id="${hero.id}"
        onclick="${this}"
      >
        <span class="badge"> ${hero.id} </span> ${hero.name}
      </li>`
    )}</ul>${selectedHero ?
      wire(this, ':editor')`
      <div>
        <h2> ${selectedHero.name} details!</h2>
        <div><label>id: </label> ${selectedHero.id}</div>
        <div>
          <label>name: </label>
          <input
            value="${selectedHero.name}"
            oninput="${this}" placeholder="name">
        </div>
      </div>` : ''
    }`;
  }
  static get styles() { return `
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }`;
  }
  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = HEROES;
    this.selectedHero = null;
    this.render();
  }
  handleEvent(e) {
    switch (e.type) {
      case 'click': // <li> has been clicked
        const id = e.currentTarget.dataset.id;
        this.selectedHero = HEROES.find(hero => hero.id == id);
        break;
      case 'input': // <input> Hero editor changed
        this.selectedHero.name = e.currentTarget.value;
        break;
    }
    this.render();
  }
}