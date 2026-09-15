(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('myexamhub-theme');
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
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
      var current = root.getAttribute('data-theme') || 'light';
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

  document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dialog = document.getElementById(btn.getAttribute('data-open-modal'));
      if (dialog && typeof dialog.showModal === 'function') { dialog.showModal(); }
    });
  });

  document.querySelectorAll('.info-modal').forEach(function (dialog) {
    var closeBtn = dialog.querySelector('.info-modal-close');
    if (closeBtn) { closeBtn.addEventListener('click', function () { dialog.close(); }); }
    dialog.addEventListener('click', function (e) {
      var rect = dialog.getBoundingClientRect();
      var inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inside) { dialog.close(); }
    });
  });

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
      if (details.classList.contains('is-open')) {
        collapse();
      } else {
        expand();
      }
    });

    function settle(onEnd) {
      var done = false;
      function handler(e) {
        if (e.propertyName && e.propertyName !== 'grid-template-rows') { return; }
        finish();
      }
      var timer = setTimeout(finish, 320);
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
      requestAnimationFrame(function () {
        details.classList.add('is-open');
      });
    }

    function collapse() {
      details.classList.remove('is-open');
      settle(function () { details.open = false; });
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
