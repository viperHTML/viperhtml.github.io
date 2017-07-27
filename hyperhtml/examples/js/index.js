addEventListener(
  'DOMContentLoaded',
  () => {

    let currentFramework, currentExample;

    let loaded = 0;
    const progress = document.querySelector('progress');

    // shortcut
    const wire = hyperHTML.wire;

    // render bound container (not adopting, will replace the progress bar)
    const render = hyperHTML.bind(
      document.querySelector('.hero-body .container')
    );

    // used model
    const model = {
      // will update currentFramework and currentExample
      handleEvent(e) {
        if (e.target.classList.contains('framework')) {
          currentFramework = e.target.value;
          currentExample = Object.keys(this.example[currentFramework])[0];
        } else if (e.target.classList.contains('example')) {
          currentExample = e.target.value;
        }
        location.href = `#!fw=${
          encodeURIComponent(currentFramework)
        }&example=${
          encodeURIComponent(currentExample)
        }`;
      },
      // loaded later on
      example: {}
    };

    // utility to load all examples
    const load = (path, resolved, type) => new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${path}/${type}.js`);
      xhr.send(null);
      xhr.onload = () => {
        resolved[type] = xhr.responseText;
        progress.value = ++loaded;
        progress.previousElementSibling.textContent =
          `Loading examples ${progress.value}/${progress.max}`;
        resolve();
      };
    });

    // grab info from the index.json
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/hyperhtml/examples/example/index.json');
    xhr.send(null);
    xhr.onload = () => {
      // create all tests as object
      const info = JSON.parse(xhr.responseText);
      const examples = [];
      Object.keys(info).forEach(framework => {
        model.example[framework] = {};
        const dir = info[framework].dir;
        info[framework].tests.forEach(test => {
          const path = `/hyperhtml/examples/example/${dir}/${test.dir}`;
          const resolved = {pen: Object.assign({}, test.pen)};
          model.example[framework][test.name] = resolved;
          examples.push(
            load(path, resolved, 'fw'),
            load(path, resolved, 'hyper')
          );
        });
      });

      progress.max = examples.length;
      Promise.all(examples).then(() => {

        // react on hash changes (sharable links)
        addEventListener('hashchange', update);

        // start with a framework
        currentFramework = /!fw=([^&]+)/.test(location.hash) ?
          decodeURIComponent(RegExp.$1) :
          Object.keys(model.example)[0];

          // and with a test
        currentExample = /&example=([^&]+)/.test(location.hash) ?
          decodeURIComponent(RegExp.$1) :
          Object.keys(model.example[currentFramework])[0];

        // show the output for the first time
        update();
      });
    };

    const update = () => {
      const framework = model.example[currentFramework];
      render`
        <div class="tile box selection">
          <select class="framework" onchange="${model}">${
            Object.keys(model.example).map(
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
              <p class="title"> ${currentFramework} </p>
              <div class="content framework">
                <pre><code class="javascript">${
                  // as text node, it'd be replaced via hljs
                  hyperHTML.escape(framework[currentExample].fw).trim()
                }</code></pre>
              </div>
              <p>${
                framework[currentExample].pen.fw ?
                  `<a href="${
                    framework[currentExample].pen.fw
                  }">Try it on CodePen.</a>` : ''
              }</p>
            </div>
          </div>
          <div class="tile is-parent is-6">
            <div class="tile is-child">
              <p class="title"> hyperHTML </p>
              <div class="content hyperhtml">
                <pre><code class="javascript">${
                  // as text node, it'd be replaced via hljs
                  hyperHTML.escape(framework[currentExample].hyper).trim()
                }</code></pre>
              </div>
              <p>${
                framework[currentExample].pen.hyper ?
                  `<a href="${
                    framework[currentExample].pen.hyper
                  }">Try it on CodePen.</a>` : ''
              }</p>
            </div>
          </div>
        </div>
      `;

      hljs.highlightBlock(document.querySelector('.framework pre code'));
      hljs.highlightBlock(document.querySelector('.hyperhtml pre code'));

    };
  },
  {once: true}
);