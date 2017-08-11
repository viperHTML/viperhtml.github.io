function BoilingVerdict(comp, celsius) {
  return hyperHTML.wire(comp, ':verdict')`
  <p celsius=${celsius}>The water would ${
    celsius >= 100 ? '' : ' not '
  } boil.</p>`;
}

class TemperatureInput extends HyperElement {
  static get observedAttributes() { return ['temperature']; }

  handleEvent(e) {
    const detail = e.target.value;
    this.dispatchEvent(new CustomEvent(
      'temperaturechange',
      {detail, bubbles: true}
    ));
  }

  render() {
    return this.html`
    <fieldset>
      <legend>Enter temperature in ${
        scaleNames[this.getAttribute('scale')]
      }:</legend>
      <input
        value=${this.getAttribute('temperature')}
        oninput=${this}>
    </fieldset>`;
  }
}

customElements.define('temperature-input', TemperatureInput);

class Calculator extends HyperElement {
  constructor(...args) {
    super(...args);
    this.state = {temperature: '', scale: 'c'};
  }

  handleEvent(e) {
    this.state = {
      temperature: parseFloat(e.detail || 0),
      scale: e.target.getAttribute('scale')
    };
    this.render();
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return this.html`
    <temperature-input
      scale=c
      temperature=${celsius}
      ontemperaturechange=${this}
    ></temperature-input>
    <temperature-input
      scale=f
      temperature=${fahrenheit}
      ontemperaturechange=${this}
    ></temperature-input>
    ${BoilingVerdict(this, celsius)}`;
  }
}

customElements.define('h-calculator', Calculator);

hyperHTML.bind(document.getElementById('root'))`
<h-calculator></h-calculator>`;
