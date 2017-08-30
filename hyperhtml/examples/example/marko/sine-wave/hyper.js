document.head.appendChild(
  document.createElement('style')
).textContent = `
.animated-sin-wave {
  position: relative;
  height: 150px;
  width: 100%;
  overflow: hidden;
}

.animated-sin-wave > .bar {
  position: absolute;
  height: 100%;
  border-radius: 50%;
  max-width:10px;
}

.animated-sin-wave-description {
  width:100%;
  text-align:center;
  font-size:0.8em;
  color:#747678;
  padding: 2em
}`;

class SineWave extends HyperHTMLElement {
  get defaultState() {
    return {active: false, count: 0};
  }
  created() {
    this.step = .5;
    this.render = this.render.bind(this);
    addEventListener('resize', this);
    this.addEventListener('click', this);
  }
  connectedCallback() {
    this.onresize();
    this.start();
  }
  start() {
    if (!this.state.active) {
      this.setState({active: true});
    }
  }
  stop() {
    this.setState({active: false});
  }
  onresize() {
    this.barCount = Math.min(200, Math.floor(innerWidth / 15));
    this.barWidth = 100 / this.barCount;
  }
  onclick() {
    this.step *= -1;
  }
  render() {
    if (!this.state.active) return;
    requestAnimationFrame(this.render);
    const waves = [];
    this.state.count += this.step;
    for (let count = this.state.count, i = 0; i < this.barCount; i++) {
      let translateY = Math.sin(count / 10 + i / 5) * 100 * .5;
      let hue = (360 / this.barCount * i - count) % 360;
      let color = `hsl(${hue},95%,55%)`;
      let rotation = (count + i) % 360;
      let barX = this.barWidth * i;
      waves[i] = hyperHTML.wire(this, ':wave-' + i)`
      <div class=bar style=${[
        `width: ${this.barWidth}%`,
        `left: ${barX}%`,
        `transform: scale(0.8,.5) translateY(${translateY}%) rotate(${rotation}deg)`,
        `background-color: ${color}`
      ].join(';')}></div>`;
    }
    this.html`
    <div class=animated-sin-wave>${waves}</div>
    <p class=animated-sin-wave-description>
      The above animation is ${this.barCount} <code>&lt;div&gt;</code> tags.
      No SVG, no CSS transitions/animations.
      It's all powered by hyperHTML which update each wave style every frame.
    </p>`;
  }
}

SineWave.define('sine-wave');