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
  github: 'https://github.com/WebReflection/viperHTML',
};

const content = () => {
  return hyperHTML`
<div class="container">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-4">
      <article class="tile is-child has-text-centered">
        <p class="title">viper(HTML)</p>
        <p class="subtitle">Declarative Back End</p>
        <img src="${site.baseurl + '/img/viperhtml.svg'}" alt="viperHTML">
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child">
        <div class="content">
          <p>
            Serving the <strong>fastest</strong> <a href="https://hnpwa.com/">Hacker News PWA</a>,
            <a href="${config.github}">viper(HTML)</a> brings the same ease and performance of <em>hyperHTML</em> to <strong>NodeJS</strong>.<br>
            100% compatible with <em>hyper(HTML)</em> templates,
            <em>viper(HTML)</em> is also capable of asynchronous, streamed layouts and much more:
          </p>
          <ul>
            <li>sharable templates between server and client</li>
            <li>optionally asynchronously streamed responses</li>
            <li>auto minified static layout, including CSS and JS</li>
            <li>asynchronous, always ordered, interpolations</li>
            <li>comaptible with DOM Level 0 events</li>
          </ul>
          <p>
            Compatible with <strong>NodeJS</strong> version <strong>4 and above</strong>,
            <em>viperHTML</em> comes with <a href="https://github.com/WebReflection/create-viperhtml-app">a simplified bootstrap</a> already configured for most common PWAs.
          </p>
          <p style="min-height:32px;">
            <img src="https://coveralls.io/repos/github/WebReflection/viperHTML/badge.svg?branch=master" alt="code coverage">
            <a class="github-button" href="${config.github}" data-icon="octicon-star" data-show-count="true" aria-label="Star WebReflection/viperHTML on GitHub">Star</a>
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
