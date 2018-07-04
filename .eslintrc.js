/*
 * ISC License
 *
 * Copyright (c) 2018, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS' AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
'use strict';
/* eslint sort-keys: ['error', 'asc'] */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
  },
  root: true,
  rules: {
    eqeqeq: 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoreComments: true,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'no-constant-condition': 'warn',
    'no-empty': 'off',
    'no-fallthrough': 'warn',
    'no-new-wrappers': 'error',
    'no-octal': 'warn',
    'no-regex-spaces': 'warn',
    'no-return-await': 'error',
    'no-unused-vars': 'warn',
    'prefer-destructuring': 'warn',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    semi: [
      'error',
      'always',
    ],
  },
};
