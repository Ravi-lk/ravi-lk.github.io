/* ravindu(1) — tiny bit of behaviour: themes, less(1)-style keys and status line */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEMES = ['amber', 'green', 'paper'];
  var THEME_COLOR = { amber: '#120d05', green: '#050f08', paper: '#f1ebdc' };

  /* ---------- theme ---------- */
  function setTheme(name) {
    if (THEMES.indexOf(name) < 0) name = 'amber';
    root.dataset.theme = name;
    try { localStorage.setItem('theme', name); } catch (e) {}
    document.querySelectorAll('[data-set-theme]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.setTheme === name));
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = THEME_COLOR[name];
  }
  document.querySelectorAll('[data-set-theme]').forEach(function (b) {
    b.addEventListener('click', function () { setTheme(b.dataset.setTheme); });
  });
  setTheme(root.dataset.theme);

  /* ---------- status line ---------- */
  var statusText = document.getElementById('status-text');
  var lineH = parseFloat(getComputedStyle(root).lineHeight) || 24;
  var flash = null;

  function updateStatus() {
    if (flash) return;
    var max = document.documentElement.scrollHeight - innerHeight;
    var y = scrollY;
    var line = Math.floor(y / lineH) + 1;
    var total = Math.floor(document.documentElement.scrollHeight / lineH);
    if (y >= max - 2) {
      statusText.textContent = '(END)';
    } else {
      var pct = max > 0 ? Math.round((y / max) * 100) : 0;
      statusText.textContent = 'Manual page ravindu(1) line ' + line + '/' + total + ' (' + pct + '%)';
    }
  }
  function say(msg) {
    flash = true;
    statusText.textContent = msg;
    clearTimeout(say.t);
    say.t = setTimeout(function () { flash = null; updateStatus(); }, 1600);
  }

  /* ---------- active section in index ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.index a[href^="#"]'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function updateIndex() {
    var mark = scrollY + innerHeight * 0.3;
    var current = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= mark) current = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === current); });
  }

  var ticking = false;
  addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { updateStatus(); updateIndex(); ticking = false; });
  }, { passive: true });
  addEventListener('resize', updateStatus);
  updateStatus();
  updateIndex();

  /* ---------- help ---------- */
  var help = document.getElementById('help');
  var lastFocus = null;
  function openHelp() { lastFocus = document.activeElement; help.hidden = false; help.tabIndex = -1; help.focus(); }
  function closeHelp() { help.hidden = true; if (lastFocus) lastFocus.focus(); }
  help.addEventListener('click', closeHelp);

  /* ---------- keys ---------- */
  addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    if (!help.hidden) {
      if (e.key === 'Escape' || e.key === 'q' || e.key === 'h' || e.key === '?') { e.preventDefault(); closeHelp(); }
      return;
    }

    var page = innerHeight - 4 * lineH;
    switch (e.key) {
      case 'j': scrollBy({ top: lineH * 3 }); break;
      case 'k': scrollBy({ top: -lineH * 3 }); break;
      case 'b': scrollBy({ top: -page }); break;
      case 'g': scrollTo({ top: 0 }); break;
      case 'G': scrollTo({ top: document.documentElement.scrollHeight }); break;
      case 't': {
        var next = THEMES[(THEMES.indexOf(root.dataset.theme) + 1) % THEMES.length];
        setTheme(next);
        say('theme: ' + next);
        break;
      }
      case 'h': case '?': openHelp(); break;
      case 'q': say('there is no quitting. try closing the tab.'); break;
      default:
        if (/^[1-9]$/.test(e.key) && links[+e.key - 1]) {
          sections[+e.key - 1].scrollIntoView();
          history.replaceState(null, '', links[+e.key - 1].getAttribute('href'));
          break;
        }
        return;
    }
    e.preventDefault();
  });
})();
