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

    // bulma toggle menu functionality
    $('.nav-toggle').addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('is-active');
      this.nextElementSibling.classList.toggle('is-active');
    });

    // bulma full height fix for iOS
    addEventListener('orientationchange', fixHeight);
    fixHeight();
    function fixHeight() {
      $('section').style.minHeight = doc.documentElement.clientHeight + 'px';
    }

    // bulma modal
    $('.modal').addEventListener('click', function (e) {
      e.stopPropagation();
      if (e.target.id !== 'patreon') {
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

  },
  {once: true}
);