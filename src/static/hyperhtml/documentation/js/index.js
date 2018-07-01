// (c) Andrea Giammarchi - @WebReflection
addEventListener(
  'DOMContentLoaded',
  function () {
    var
      html = document.documentElement,
      menu = $('.menu:first'),
      offsetHeight = html.offsetHeight
    ;
    [].forEach.call(
      $('pre > code'),
      function (node) {
        dropUnnecessarySpaces(node);
        hljs.highlightBlock(node);
        hljs.lineNumbersBlock(node);
      }
    );
    setTimeout(hash, 10);
    addEventListener('hashchange', hash);
    (function magicMenu() {
      if (!matchMedia(
        '(orientation: landscape) and (min-width: 760px)'
      ).matches) return;
      var hX = $('h2, h3');
      setTimeout(onresize, 33);
      addEventListener('resize', onresize);
      onresize();
      document.addEventListener('scroll', function (e) {
        [].some.call(hX, highlight);
      });
      function highlight(el) {
        if (el.nodeName === 'H2') el = el.parentNode;
        var rect = el.getBoundingClientRect();
        if ((rect.top >= 0) && (rect.bottom <= offsetHeight)) {
          if (el.id) hashChange($('a[href="#' + el.id + '"]:first', menu));
          return true;
        }
      }
      function onresize() {
        offsetHeight = html.offsetHeight;
        menu.style.cssText = [
          'position: fixed;',
          'width: ' + (menu.parentNode.offsetWidth - 20) + 'px;',
          'max-height:' + (html.clientHeight - 140) + 'px;',
          'overflow-y:auto;'
        ].join('');
      }
    }());
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
        if (hash.el = el) {
          el.className = 'is-active';
          var rect = el.getBoundingClientRect();
          if (
            rect.top > (menu.offsetHeight - menu.scrollTop) ||
            rect.top < menu.scrollTop
          ) {
            el.scrollIntoView({
              block: 'end',
              behavior: 'smooth'
            });
          }
        }
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