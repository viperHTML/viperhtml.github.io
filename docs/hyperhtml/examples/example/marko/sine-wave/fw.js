static var barCount;
static var barWidth;

style {
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
    }
}

class {
    constructor() {
        this.state = {
            active: false,
            count: 0
        };
        this.step = .5;
    }
    onMount() {
        this.nextFrame = this.nextFrame.bind(this);
        this.subscribeTo(window).on('resize', () => this.scale());
        this.scale();
        this.start();
    }
    scale() {
        barCount = Math.min(200, Math.floor(window.innerWidth/15));
        barWidth = 100/barCount;
    }
    start() {
        if (!this.state.active) {
            this.state.active = true;
            this.nextFrame();
        }
    }
    stop() {
        this.state.active = false;
    }
    switchDirection() {
        this.step *= -1;
    }
    nextFrame() {
        if (this.state.active) {
            this.state.count += this.step;
            window.requestAnimationFrame(this.nextFrame);
        }
    }
}

<div.animated-sin-wave on-click('switchDirection')>
    $ var count = state.count;

    <for(var i=0; i<barCount; i++)>
        $ var translateY = Math.sin(count/10 + i/5) * 100 * .5;
        $ var hue = (360/barCount * i - count) % 360;
        $ var color = 'hsl('+hue+',95%,55%)';
        $ var rotation = (count+i)%360;
        $ var barX = barWidth * i;

        $ var style = {
            width: barWidth + '%',
            left: barX + '%',
            transform: 'scale(0.8,.5) translateY(' + translateY + '%) rotate(' + rotation + 'deg)',
            backgroundColor: color
        };

        <div.bar style=style/>
    </for>
</div>

<p.animated-sin-wave-description>
    The above animation is ${barCount} <code>&lt;div></code> tags.
    No SVG, no CSS transitions/animations.
    It's all powered by Marko which does a full re-render every frame.
</p>