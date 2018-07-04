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

const pageDocumentation = page => {
  return page.documentation ? hyperHTML`
<p>
  <a id="examples" class="button" href="${site.baseurl + '/' + page.documentation + '/examples/'}">Examples</a>
  <a id="documentation" class="button" href="${site.baseurl + '/' + page.documentation + '/documentation/'}">Documentation</a>
</p>` : null;
};

const modal = page => {
  return hyperHTML`
<div class="modal">
  <div class="modal-background"/>
  <div class="modal-content">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img id="ag" src="${site.baseurl + '/img/ag.png'}" alt="Andrea Giammarchi"/>
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Hello There!</strong><br/>
              I am doing my best to create good documentation full of meaningful examples.
            </p>
          </div>
        </div>
      </article>
      <div class="content">
        <p>
          However, no matter how interesting an Open Source project is,
          if it's not sustainable, it won't have the support it needs.
          Please consider backing this project, <strong>thank you</strong>!
        </p>
        <p>
          <a id="donate" class="button is-info" href="https://opencollective.com/hyperhtml">Open Collective</a>
          <a id="paypal" class="button is-success" href="https://www.paypal.me/webreflection">PayPal Donation</a>
        </p>
        ${pageDocumentation(page)}
      </div>
    </div>
  </div>
  <button class="modal-close"/>
</div>`;
};

module.exports = modal;
