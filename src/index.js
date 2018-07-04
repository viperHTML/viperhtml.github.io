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

const config = require('./config.js');
const layouts = require('./layouts/index.js');

/**
 * @param {string} pageName
 */
const renderPage = (pageName) => {
  const pageFile = pageName.includes('.') ? pageName.substring(0, pageName.lastIndexOf('.')) : pageName;
  const pageRender = require(`./pages/${pageFile}.js`);
  const pageData = Object.assign({}, pageRender.config, {url: `/${pageFile}.html`});
  return layouts[pageData.layout || 'default'](pageRender.content(), pageData);
};

module.exports = {
  config,
  renderPage,
};
