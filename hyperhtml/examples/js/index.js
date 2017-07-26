addEventListener(
  'DOMContentLoaded',
  () => {

    const wire = hyperHTML.wire;

    const render = hyperHTML.bind(
      document.querySelector('.hero-body .container')
    );

    const model = {
      handleEvent(e) {
        if (e.target.classList.contains('framework')) {
          currentFramework = e.target.value;
          currentExample = Object.keys(this.framework[currentFramework])[0];
        } else if (e.target.classList.contains('example')) {
          currentExample = e.target.value;
        }
        location.href = `#!fw=${
          encodeURIComponent(currentFramework)
        }&example=${
          encodeURIComponent(currentExample)
        }`;
      },
      framework: {
        'React': {
          'Hello, world!': {
            fw: `
              ReactDOM.render(
                <h1>Hello, world!</h1>,
                document.getElementById('root')
              );
            `,
            hyper: `
              hyperHTML.bind(document.getElementById('root'))\`
                <h1>Hello, world!</h1>
              \`;
            `
          },
          'Hello, world & tick': {
            fw: `
              function tick() {
                const element = (
                  <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                  </div>
                );
                ReactDOM.render(
                  element,
                  document.getElementById('root')
                );
              }

              setInterval(tick, 1000);
            `,
            hyper: `
              function tick(render) {
                render\`
                  <div>
                    <h1>Hello, world!</h1>
                    <h2>It is \${new Date().toLocaleTimeString()}.</h2>
                  </div>
                \`;
              }

              setInterval(tick, 1000,
                hyperHTML.bind(document.getElementById('root')));
            `
          }
        }
      }
    };

    const update = () => {
      const framework = model.framework[currentFramework];
      render`
        <div class="tile box selection">
          <select class="framework" onchange="${model}">${
            Object.keys(model.framework).map(
              key => wire(model, ':fw-' + key)`
              <option selected="${currentFramework === key}">
                ${key}
              </option>`
          )}</select>
          <select class="example" onchange="${model}">${
            Object.keys(framework).map(
              key => wire(model, ':example-' + key)`
              <option selected="${currentExample === key}">
                ${key}
              </option>`
          )}</select>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-6">
            <div class="tile is-child">
              <div class="content framework">
                <pre><code class="javascript">${
                  // as text node, it'd be replaced via hljs
                  dropSpacesAndEscape(framework[currentExample].fw)
                }</code></pre>
              </div>
            </div>
          </div>
          <div class="tile is-parent is-6">
            <div class="tile is-child">
              <div class="content hyperhtml">
                <pre><code class="javascript">${
                  // as text node, it'd be replaced via hljs
                  dropSpacesAndEscape(framework[currentExample].hyper)
                }</code></pre>
              </div>
            </div>
          </div>
        </div>
      `;

      hljs.highlightBlock(document.querySelector('.framework pre code'));
      hljs.highlightBlock(document.querySelector('.hyperhtml pre code'));
    };

    const dropSpacesAndEscape = text => {
      const line = text.split('\n');
      const gap = /^\s+/.test(line[1]) && RegExp['$&'];
      return hyperHTML.escape(text.replace(new RegExp('^' + gap, 'gm'), '').trim());
    };

    let currentFramework = /!fw=([^&]+)/.test(location.hash) ?
      decodeURIComponent(RegExp.$1) :
      Object.keys(model.framework)[0];
    let currentExample = /&example=([^&]+)/.test(location.hash) ?
      decodeURIComponent(RegExp.$1) :
      Object.keys(model.framework[currentFramework])[0];

    update();

    addEventListener('hashchange', update);

  },
  {once: true}
);