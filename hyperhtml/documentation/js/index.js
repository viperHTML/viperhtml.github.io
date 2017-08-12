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
      if (
        !/landscape/.test(screen.orientation.type) ||
        document.documentElement.offsetWidth < 760
      ) return;
      var
        hX = $('h2, h3'),
        top = document.body.scrollTop,
        active = false,
        touched = false,
        clientY = 0,
        old = 0
      ;
      menu.style.position = 'absolute';
      menu.addEventListener('mousemove', function (e) {
        clientY = e.clientY;
        if (!active) animate();
      });
      menu.addEventListener('touchstart', function (e) {
        e.preventDefault();
        touched = true;
        clientY = e.touches[0].clientY;
        old = clientY;
      });
      menu.addEventListener('touchmove', function (e) {
        e.preventDefault();
        clientY = e.touches[0].clientY;
        menu.style.top = (top + (clientY - old)) + 'px';
      });
      menu.addEventListener('touchend', function (e) {
        e.preventDefault();
        touched = false;
        old = parseFloat(menu.style.top);
        if (Math.abs(old - top) < 10) {
          top = old;
          old = 0;
          e.target.click();
          animate();
        } else {
          active = false;
          top = old;
        }
      });
      document.addEventListener('scroll', function (e) {
        if (!active) animate();
        [].some.call(hX, highlight);
      });
      animate();
      function animate() {
        if (touched) return;
        top = Math.max(0, top + (document.body.scrollTop - (top + clientY)) * .02);
        active = old.toFixed(1) !== top.toFixed(1);
        if (active) {
          old = top;
          menu.style.top = top + 'px';
          requestAnimationFrame(animate);
        }
      }
      function highlight(el) {
        var rect = el.getBoundingClientRect();
        if ((rect.top >= 0) && (rect.bottom <= window.innerHeight)) {
          if (el.id) hashChange($('a[href="#' + el.id + '"]:first', menu));
          return true;
        }
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