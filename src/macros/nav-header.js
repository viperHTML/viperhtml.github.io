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

const githubLink = page => {
  return page.github ? hyperHTML`
<span class="nav-item">
  <a href="${page.github}" class="button is-inverted">
    <span class="icon">
      <img width="18" height="18" src="${site.baseurl + '/img/github.svg'}">
    </span>
    <span>GitHub</span>
  </a>
</span>` : null;
};

const navHeader = page => {
  return hyperHTML`
<header class="nav">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item" href="https://github.com/viperHTML/viperhtml.github.io" title="This Website on GitHub">
        <img width="35" height="28" src="${site.baseurl + '/img/viperhtml.svg'}" alt="Logo">
      </a>
      <a class="nav-item" href="https://js.org" target="_blank" title="JS.ORG | JavaScript Community">
        <img width="51" src="https://logo.js.org/dark_horz.png" alt="JS.ORG Logo"/>
      </a>
    </div>
    <span class="nav-toggle">
      <span/>
      <span/>
      <span/>
    </span>
    <div class="nav-right nav-menu">
      <a href="/" class="nav-item is-active">
        Home
      </a>
      <a href="#examples" class="nav-item" title="Coming Soon">
        Examples
      </a>
      <a href="#documentation" class="nav-item" title="Coming Soon">
        Documentation
      </a>
      ${githubLink(page)}
    </div>
  </div>
</header>`;
};

module.exports = navHeader;
