// Mobile menu + subtle scroll reveal. No frameworks, no build step.
(function () {
  document.documentElement.classList.add("js");
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    // Escape closes the menu and returns focus to the toggle.
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        toggle.focus();
      }
    });
  }

  // Scrollspy — marks the current section's nav link with aria-current.
  var spyLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var spySections = [];
  spyLinks.forEach(function (a) {
    var s = document.querySelector(a.getAttribute("href"));
    if (s) spySections.push(s);
  });
  if ("IntersectionObserver" in window && spyLinks.length && spySections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            spyLinks.forEach(function (a) { a.removeAttribute("aria-current"); });
            var link = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
            if (link) link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    spySections.forEach(function (s) { spy.observe(s); });
  }

  // Reveal on scroll — single IntersectionObserver, subtle by design.
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach(function (el) { observer.observe(el); });

  // Reading progress — 2px hairline under the nav, rAF-throttled.
  // Skipped when the user prefers reduced motion (CSS hides the bar too).
  var progress = document.getElementById("scrollProgress");
  var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (progress && !motionQuery.matches) {
    var ticking = false;
    function update() {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
    }
    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();
  }
})();
