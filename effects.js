/* Page effects: fog you can wipe on the hero and behind the page, and cards that rise as you scroll.
   Plain JavaScript, no libraries. Each effect checks for a mouse and for the reduced-motion setting first. */
(function () {
  "use strict";
  var root = document.documentElement;
  var mm = window.matchMedia ? window.matchMedia.bind(window) : function () { return { matches: false }; };
  var motionOK = !mm("(prefers-reduced-motion: reduce)").matches;

  /* ---------- light / dark toggle ---------- */
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t === "dark" || (t !== "light" && mm("(prefers-color-scheme: dark)").matches);
  }
  (function themeToggle() {
    var SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    var MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    var b = document.createElement("button");
    b.type = "button"; b.className = "theme-toggle";
    function paint() {
      var d = isDark();
      b.innerHTML = d ? SUN : MOON;                       // the icon shows where a tap takes you
      b.setAttribute("aria-label", d ? "Switch to light mode" : "Switch to dark mode");
      b.setAttribute("data-tip", d ? "Switch to light mode" : "Switch to dark mode");
    }
    b.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("linkme-theme", next); } catch (e) {}
      paint();
      window.dispatchEvent(new Event("resize"));          // redraw the fog in the new colours
    });
    paint();
    document.body.appendChild(b);
  })();

  /* ---------- cards rise as they scroll into view ---------- */
  // A plain scroll check (no IntersectionObserver), so cards can never get stuck hidden in an unusual browser.
  var grid = document.getElementById("grid");
  if (grid && motionOK) {
    root.classList.add("js-rise");
    var queued = false;
    var reveal = function () {
      queued = false;
      var vh = window.innerHeight || root.clientHeight, n = 0;
      grid.querySelectorAll(".card:not(.in)").forEach(function (c) {
        var r = c.getBoundingClientRect();
        if (!r.height || r.top > vh * 0.94 || r.bottom < 0) return;
        c.style.setProperty("--rd", (n++ % 3) * 70 + "ms");      // a short stagger across a row
        c.classList.add("in");
      });
    };
    var schedule = function () { if (!queued) { queued = true; requestAnimationFrame(reveal); } };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    new MutationObserver(schedule).observe(grid, { childList: true });
    setInterval(reveal, 600);   // safety net: whatever happens, visible cards always show
    reveal();
  }

  /* ---------- fog ---------- */
  if (!motionOK || !mm("(hover:hover)").matches) return;
  var img = new Image();
  img.onload = start;
  img.src = "office-bg.webp";

  function dark() { return isDark(); }

  // draw the scene to fill w x h like CSS "cover", anchored at the given vertical position (0 top, .5 centre)
  function cover(ctx, w, h, anchorY) {
    var s = Math.max(w / img.naturalWidth, h / img.naturalHeight), dw = img.naturalWidth * s, dh = img.naturalHeight * s;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) * anchorY, dw, dh);
  }

  // one fog layer: a canvas that holds the sharp scene wherever the pointer has wiped, and fades back to nothing
  function Fog(host, fixed, anchorY, veil) {
    var canvas = document.createElement("canvas");
    canvas.className = fixed ? "fog-page" : "fog-canvas";
    canvas.setAttribute("aria-hidden", "true");
    if (fixed) document.body.appendChild(canvas); else host.insertBefore(canvas, host.firstChild);
    var ctx = canvas.getContext("2d"), sharp = document.createElement("canvas"), sctx = sharp.getContext("2d");
    var tmp = document.createElement("canvas"), tctx = tmp.getContext("2d");
    var W = 0, H = 0, S = 1, R = fixed ? 90 : 80, last = null, lastStamp = 0, running = false;

    function size() {
      W = fixed ? window.innerWidth : host.offsetWidth; H = fixed ? window.innerHeight : host.offsetHeight;
      if (!W || !H) return;
      S = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = sharp.width = Math.round(W * S); canvas.height = sharp.height = Math.round(H * S);
      sctx.setTransform(S, 0, 0, S, 0, 0); sctx.clearRect(0, 0, W, H);
      // the clear glass shows the scene at full strength: boosted colour, and no wash on top
      if ("filter" in sctx) sctx.filter = "saturate(1.75) contrast(1.12)";
      cover(sctx, W, H, anchorY);
      if ("filter" in sctx) sctx.filter = "none";
      tmp.width = tmp.height = Math.round(R * 2 * S);
    }

    function stamp(x, y) {
      var d = R * 2 * S;
      tctx.setTransform(1, 0, 0, 1, 0, 0); tctx.globalCompositeOperation = "source-over"; tctx.clearRect(0, 0, d, d);
      var g = tctx.createRadialGradient(d / 2, d / 2, 0, d / 2, d / 2, d / 2);
      g.addColorStop(0, "rgba(0,0,0,1)"); g.addColorStop(.86, "rgba(0,0,0,1)"); g.addColorStop(1, "rgba(0,0,0,0)");
      tctx.fillStyle = g; tctx.fillRect(0, 0, d, d);
      tctx.globalCompositeOperation = "source-in";
      tctx.drawImage(sharp, -(x * S - d / 2), -(y * S - d / 2));
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(tmp, x * S - d / 2, y * S - d / 2);
    }

    function tick(now) {
      var idle = now - lastStamp;
      if (idle > 8500) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); running = false; return; }
      if (idle > 1600) {                                   // the fog creeps back
        ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,.014)"; ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
      }
      requestAnimationFrame(tick);
    }

    this.move = function (cx, cy) {
      if (!W) size();
      var x, y;
      if (fixed) { x = cx; y = cy; } else { var r = host.getBoundingClientRect(); x = cx - r.left; y = cy - r.top; if (y < -R || y > H + R) { last = null; return; } }
      var from = last || { x: x, y: y }, dx = x - from.x, dy = y - from.y, dist = Math.sqrt(dx * dx + dy * dy), steps = Math.max(1, Math.ceil(dist / (R * .35)));
      for (var i = 1; i <= steps; i++) stamp(from.x + dx * i / steps, from.y + dy * i / steps);
      last = { x: x, y: y }; lastStamp = performance.now();
      if (!running) { running = true; requestAnimationFrame(tick); }
    };
    this.resize = size;
    size();
    if (!fixed && "ResizeObserver" in window) new ResizeObserver(function () { size(); }).observe(host);
  }

  function start() {
    root.classList.add("fog-on");
    var fogs = [];

    // behind the whole page: lighter veil, so the wiped scene shows clearly between the cards
    fogs.push(new Fog(document.body, true, 0, function () {
      return function (c) { return dark() ? "rgba(14,19,27,.45)" : "rgba(242,239,232,.38)"; };
    }));

    // the hero window: the same veil the hero normally has
    var hero = document.querySelector(".hero");
    var heroFog = null;
    if (hero) {
      heroFog = new Fog(hero, false, .5, function () {
        return function (c, h) {
          var cs = getComputedStyle(root), g = c.createLinearGradient(0, 0, 0, h);
          var d = dark();                                   // clear glass: far less veil than the frosted look
          g.addColorStop(0, d ? "rgba(10,16,28,.08)" : "rgba(255,255,255,.10)");
          g.addColorStop(1, d ? "rgba(8,12,22,.14)" : "rgba(240,246,252,.16)");
          return g;
        };
      });
      fogs.push(heroFog);
    }

    document.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      if (heroFog) heroFog.move(e.clientX, e.clientY);
      fogs[0].move(e.clientX, e.clientY);
    }, { passive: true });

    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(function () { fogs.forEach(function (f) { f.resize(); }); }, 150); });
  }
})();
