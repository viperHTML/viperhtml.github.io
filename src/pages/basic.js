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
  title: 'basicHTML',
  github: 'https://github.com/WebReflection/viperHTML',
};

const content = () => {
  return hyperHTML`
<div class="container">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-4">
      <article class="tile is-child has-text-centered">
        <p class="title">basicHTML</p>
        <p class="subtitle">Simplified DOM Back End</p>
        <img src="${site.baseurl + '/img/basichtml.svg'}" alt="basicHTML">
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child">
        <div class="content">
          <p>
            Similar to <a href="https://github.com/tmpvar/jsdom">jsdom</a>, but only on the surface,
            <a href="${config.github}">basicHTML</a> is a lightweight, dumb, and simple
            implementation of the HTML standard.<br>
            This project makes it possible to define, via NodeJS, NativeScript Custom Elements such as<code>&lt;Page.actionBar&gt;</code> and much more.
          </p>
          <ul>
            <li>create any number of documents</li>
            <li>document fragments, comments, text nodes, and elements</li>
            <li>case sensitive and compatible with XML structures</li>
            <li>Custom Elements, with observable attributes</li>
            <li>Event Listener, dispatcher, DOM Level 0, classList, and more</li>
          </ul>
          <p>
            Transformations from HTML to any platform that supports JavaScript is now easy to create and use,
            thanks to <em>basicHTML</em>'s sharable Custom Elements definition and the magic of <em>hyperHTML</em>.
          </p>
          <p style="min-height:32px;">
            <img src="https://coveralls.io/repos/github/WebReflection/basicHTML/badge.svg?branch=master" alt="code coverage">
            <a class="github-button" href="${config.github}" data-icon="octicon-star" data-show-count="true" aria-label="Star WebReflection/basicHTML on GitHub">Star</a>
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
