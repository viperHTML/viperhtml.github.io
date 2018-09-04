/*
 * ISC License
 *
 * Copyright (c) 2018, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
'use strict';

const hyperHTML = require('viperhtml');
const {site} = require('../config.js');

const config = {
  title: 'hyperHTML',
  documentation: 'hyperhtml',
  github: 'https://github.com/WebReflection/hyperHTML',
};

const content = () => {
  return hyperHTML`
<div class="container">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-4">
      <article class="tile is-child has-text-centered">
        <p class="title">hyper(HTML)</p>
        <p class="subtitle">Declarative Front End</p>
        <img src="${site.baseurl + '/img/hyperhtml.svg'}" alt="hyperHTML">
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child">
        <div class="content">
          <p>
            Created to <a href="https://medium.com/@WebReflection/hyperhtml-a-virtual-dom-alternative-279db455ee0e">simplify </a>
            DOM performance best practices, <a href="${config.github}">hyperHTML</a> is
            100% ECMAScript compliant and it weights about 5Kb, featuring:
          </p>
          <ul>
            <li>best in class repeated renders and updates performance</li>
            <li>declarative and reactive UI via standard <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals">template literals</a></li>
            <li>an ideal solution via <a href="https://webpack.js.org/">Webpack</a> bundles</li>
            <li>auto sanitized text content when needed</li>
            <li>partial outputs between nodes</li>
            <li>asynchronous content, renders on demand</li>
          </ul>
          <p>
            <strong>Framework agnostic</strong>, <em>hyperHTML</em> can be used to render any view,
            including <a href="https://w3c.github.io/webcomponents/spec/custom/">Custom Elements</a> and Web Components.
          </p>
          <p style="min-height:32px;">
            <img src="https://coveralls.io/repos/github/WebReflection/hyperHTML/badge.svg?branch=master" alt="code coverage">
            <a class="github-button" href="${config.github}" data-icon="octicon-star" data-show-count="true" aria-label="Star WebReflection/hyperHTML on GitHub">Star</a>
          </p>
        </div>
      </article>
    </div>
  </div>
</div>`;
};

module.exports = {
  config,
  content,
};
