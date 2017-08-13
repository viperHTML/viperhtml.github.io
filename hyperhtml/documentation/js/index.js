// (c) Andrea Giammarchi - @WebReflection
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
    (function magicMenu(menu) {
      if (!matchMedia(
        '(orientation: landscape) and (min-width: 760px)'
      ).matches) return;
      var hX = $('h2, h3');
      onresize();
      addEventListener('resize', onresize);
      document.addEventListener('scroll', function (e) {
        [].some.call(hX, highlight);
      });
      function highlight(el) {
        if (el.nodeName === 'H2') el = el.parentNode;
        var rect = el.getBoundingClientRect();
        if ((rect.top >= 0) && (rect.bottom <= window.innerHeight)) {
          if (el.id) hashChange($('a[href="#' + el.id + '"]:first', menu));
          return true;
        }
      }
      function onresize() {
        var cssText = [
          'position: fixed;',
          'width: ' + (menu.parentNode.offsetWidth - 20) + 'px;',
          'max-height:' + (document.documentElement.clientHeight - 140) + 'px;',
          'overflow-y:auto;'
        ].join('');
        menu.style.cssText = cssText;
      }
    }($('.menu:first')));
    function $(css, parent) {
      var
        split = css.split(':first'),
        root = parent || document
      ;
      return split.length < 2 ?
        root.querySelectorAll(split[0]) :
        root.querySelector(split.join(''));
    }
    function hashChange(el) {
      if (hash.el !== el) {
        if (hash.el) hash.el.className = '';
        if (hash.el = el) el.className = 'is-active';
      }
    }
    function hash() {
      hashChange($('a[href="' + (location.hash || '#introduction') + '"]:first'));
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