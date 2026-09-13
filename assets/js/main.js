(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('myexamhub-theme');
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  var storedPalette = localStorage.getItem('myexamhub-palette');
  if (storedPalette === 'sage') {
    root.setAttribute('data-palette', 'sage');
  }

  var paletteToggle = document.querySelector('.palette-toggle');
  if (paletteToggle) {
    paletteToggle.addEventListener('click', function () {
      var isSage = root.getAttribute('data-palette') === 'sage';
      var next = isSage ? 'mint' : 'sage';
      if (next === 'sage') {
        root.setAttribute('data-palette', 'sage');
      } else {
        root.removeAttribute('data-palette');
      }
      localStorage.setItem('myexamhub-palette', next);
      paletteToggle.setAttribute('aria-pressed', next === 'sage' ? 'true' : 'false');
      paletteToggle.setAttribute('aria-label', next === 'sage' ? 'Switch to Mint colours' : 'Switch to Sage colours');
    });
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var setHeaderHeight = function () {
      root.style.setProperty('--header-h', header.offsetHeight + 'px');
    };
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
  }

  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('myexamhub-theme', next);
      toggle.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
    });
  }

  var navToggle = document.querySelector('.nav-toggle');
  var navClose = document.querySelector('.nav-close');
  var nav = document.querySelector('.primary-nav');
  var scrim = document.querySelector('.nav-scrim');

  function closeNav() {
    nav.classList.remove('is-open');
    scrim.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('is-open');
    scrim.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  if (navToggle && nav && scrim) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.contains('is-open');
      if (isOpen) { closeNav(); } else { openNav(); }
    });
    scrim.addEventListener('click', closeNav);
    if (navClose) { navClose.addEventListener('click', closeNav); }
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeNav(); }
    });
  }

  var milestones = document.querySelectorAll('.milestone');
  if (milestones.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    milestones.forEach(function (milestone, i) {
      milestone.style.transitionDelay = (i * 0.12) + 's';
      observer.observe(milestone);
    });
  } else {
    milestones.forEach(function (milestone) { milestone.classList.add('is-visible'); });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.faq-item').forEach(function (details) {
    var summary = details.querySelector('summary');
    var answer = details.querySelector('.faq-answer');
    if (!summary || !answer || reduceMotion) { return; }

    details.classList.add('js-accordion');

    summary.addEventListener('click', function (e) {
      e.preventDefault();
      if (details.open) {
        collapse();
      } else {
        expand();
      }
    });

    function settle(onEnd) {
      var done = false;
      function handler(e) {
        if (e.propertyName && e.propertyName !== 'height') { return; }
        finish();
      }
      var timer = setTimeout(finish, 340);
      answer.addEventListener('transitionend', handler);
      function finish() {
        if (done) { return; }
        done = true;
        clearTimeout(timer);
        answer.removeEventListener('transitionend', handler);
        onEnd();
      }
    }

    function expand() {
      details.open = true;
      var target = answer.scrollHeight;
      answer.style.height = '0px';
      void answer.offsetHeight; /* force reflow so display:none -> 0px is committed before animating */
      requestAnimationFrame(function () {
        answer.style.height = target + 'px';
      });
      settle(function () { answer.style.height = ''; });
    }

    function collapse() {
      answer.style.height = answer.scrollHeight + 'px';
      void answer.offsetHeight;
      requestAnimationFrame(function () {
        answer.style.height = '0px';
      });
      settle(function () {
        details.open = false;
        answer.style.height = '';
      });
    }
  });

  document.querySelectorAll('[data-timeline]').forEach(function (timeline) {
    var stages = Array.prototype.slice.call(timeline.querySelectorAll('.stage, .tree-stage'));
    stages.forEach(function (stage) {
      var toggle = stage.querySelector('[data-stage-toggle]');
      if (!toggle) { return; }
      toggle.addEventListener('click', function () {
        var willOpen = !stage.classList.contains('is-open');
        stages.forEach(function (s) {
          s.classList.remove('is-open');
          var t = s.querySelector('[data-stage-toggle]');
          if (t) { t.setAttribute('aria-expanded', 'false'); }
        });
        if (willOpen) {
          stage.classList.add('is-open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
})();
