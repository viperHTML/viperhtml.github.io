addEventListener(
  'DOMContentLoaded',
  function () {
    [].forEach.call(
      document.querySelectorAll('pre > code'),
      function (node) {
        dropUnnecessarySpaces(node);
        hljs.highlightBlock(node);
        hljs.lineNumbersBlock(node);
      }
    );
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