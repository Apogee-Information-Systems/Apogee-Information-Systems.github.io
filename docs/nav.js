(function () {
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  var focusBeforeOpen = null;

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  }

  function closeMenu() {
    if (!document.body.classList.contains('nav-open')) return;
    setOpen(false);
    toggle.focus();
    focusBeforeOpen = null;
  }

  toggle.addEventListener('click', function () {
    var open = !document.body.classList.contains('nav-open');
    if (open) {
      focusBeforeOpen = document.activeElement;
    }
    setOpen(open);
    if (!open && focusBeforeOpen && focusBeforeOpen !== toggle) {
      focusBeforeOpen.focus();
      focusBeforeOpen = null;
    }
  });

  navLinks.addEventListener('click', function (event) {
    if (event.target.closest('.nav-link')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 981px)').matches) {
      closeMenu();
    }
  });
})();
