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
  title: 'viperHTML',
  github: 'https://github.com/WebReflection/nativeHTML',
};

const content = () => {
  return hyperHTML`
<div class="container">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-4">
      <article class="tile is-child has-text-centered">
        <p class="title">native(HTML)</p>
        <p class="subtitle">Declarative <a href="https://www.nativescript.org/">NativeScript</a></p>
        <img src="${site.baseurl + '/img/nativehtml.svg'}" alt="nativeHTML">
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child">
        <div class="content">
          <p>
            Based on <em>basicHTML</em> and definitively still a <strong>work in progress</strong>,
            <a href="${config.github}">nativeHTML</a> brings <em>hyperHTML</em> ease to the <a href="https://www.nativescript.org/">NativeScript</a> XML world.<br>
            Goals for this project:
          </p>
          <ul>
            <li>use template literals to declare any NativeScript UI component</li>
            <li>use interpolation to connect abstract DOM to real components</li>
            <li>deploy on both Android and iOS platform with the similar ease</li>
            <li>avoid unnecessary intermediate steps: write and test!</li>
          </ul>
          <p>
            <code>npm install nativehtml</code> and try the first <a href="https://github.com/WebReflection/nativeHTML/blob/master/examples/default-app.js">application example</a>.<br>
            This should give you an idea of what is be possible <small>(so far)</small>.
          </p>
          <p style="min-height:32px;">
            <a class="github-button" href="${config.github}" data-icon="octicon-star" data-show-count="true" aria-label="Star WebReflection/nativeHTML on GitHub">Star</a>
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
