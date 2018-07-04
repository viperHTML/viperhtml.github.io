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

const fse = require('fs-extra');
const gulp = require('gulp');
const path = require('path');

const renderer = require('./src/index.js');
const argsBuilder = require('yargs')
  .option('destination', {
    alias: ['dest', 'd'],
    default: './build/',
    description: 'The destination folder for all build processes',
  })
  .alias('help', ['h', '?'])
  .alias('version', 'V');
const argv = argsBuilder.parse(process.argv);

/* Building */

const BUILD_DIR  = argv.destination;
const SOURCE_DIR = './src/';

gulp.task('clean', () => {
  try {
    const dir = path.resolve(__dirname, BUILD_DIR);
    if (dir.startsWith(__dirname)) {
      fse.emptyDirSync(dir);
    }
  } catch (e) {
    console.error(e);
  }
});

gulp.task('build-static', ['clean'], () => {
  return gulp.src([
    `${SOURCE_DIR}static/**/*`,
  ]).pipe(gulp.dest(BUILD_DIR), {end: true});
});

gulp.task('build', ['clean', 'build-static'], () => {
  const renderPages = (...files) => {
    files.forEach(file => {
      if (file.indexOf(__dirname) !== 0) {
        file = path.join(__dirname, file);
      }

      if (!fse.existsSync(file)) {
        return; // Ignore non-existent files
      }

      if (fse.statSync(file).isFile()) {
        if (path.extname(file) === '.js') {
          const pageName = path.relative(path.resolve(__dirname, SOURCE_DIR, 'pages'), file);
          const dest = path.resolve(__dirname, BUILD_DIR, `${path.basename(pageName, '.js')}.html`);
          const result = renderer.renderPage(pageName);
          fse.outputFileSync(dest, result);
        }
        return;
      }

      const subFiles = fse.readdirSync(file).map(subfile => path.join(file, subfile));
      renderPages(...subFiles);
    });
  };

  renderPages('./src/pages/');
});
