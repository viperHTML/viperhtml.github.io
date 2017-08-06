// - - - - - - - - - - - - - - - - - - - - - - - - -
// Oh, The Irony!
// - - - - - - - - - - - - - - - - - - - - - - - - -
// No hyperHTML is used here, because I've generated
// this site statically, and I want it to be readable
// by everyone, with or without JavaScript.
// There is also zero dynamic content, beside a modal.
// Documentation and Examples are Coming Soon
// - - - - - - - - - - - - - - - - - - - - - - - - -
document.addEventListener(
  'DOMContentLoaded',
  function () {

    // local variables
    var doc = this;
    var $ = function (css) { return doc.querySelector(css); };

    // bulma full height fix for iOS
    addEventListener('orientationchange', fixHeight);
    addEventListener('load', fixHeight);
    fixHeight();
    setTimeout(fixHeight, 300);
    function fixHeight() {
      $('.hero').style.minHeight = doc.documentElement.clientHeight + 'px';
    }

    // bulma toggle menu functionality
    $('.nav-toggle').addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('is-active');
      this.nextElementSibling.classList.toggle('is-active');
    });

    // bulma modal
    $('.modal').addEventListener('click', function (e) {
      e.stopPropagation();
      if (!/^patreon|paypal|examples|documentation$/.test(e.target.id)) {
        e.preventDefault();
        this.classList.remove('is-active');
      }
    });
    $('[href="#examples"]').addEventListener('click', showModal);
    $('[href="#documentation"]').addEventListener('click', showModal);
    function showModal(e) {
      e.preventDefault();
      $('.modal').classList.add('is-active');
    }

    // GitHub Stars
    var buttons = doc.createElement('script');
    buttons.type = 'text/javascript';
    buttons.src = 'https://buttons.github.io/buttons.js';
    doc.body.appendChild(buttons);
  },
  {once: true}
);