addEventListener(
  'DOMContentLoaded',
  function () {
    [].forEach.call(
      $('pre > code'),
      function (node) {
        dropUnnecessarySpaces(node);
        hljs.highlightBlock(node);
        hljs.lineNumbersBlock(node);
      }
    );
    hash();
    addEventListener('hashchange', hash);
    function $(css) {
      var split = css.split(':first');
      return split.length < 2 ?
        document.querySelectorAll(split[0]) :
        document.querySelector(split.join(''));
    }
    function hash() {
      if (hash.el) hash.el.className = '';
      hash.el = $('a[href="' + (location.hash || '#introduction') + '"]:first');
      if (hash.el) hash.el.className = 'is-active';
    }
    function dropUnnecessarySpaces(node) {
      var lines = node.textContent.split('\n');
      var spaces = /^(\s+)/.test(lines[1]) && RegExp.$1;
      node.textContent = lines.join('\n')
        .replace(new RegExp('^' + spaces, 'gm'), '')
        .replace(/^\s+|\s+$/g, '');
    }
  },
  {once: true}
);