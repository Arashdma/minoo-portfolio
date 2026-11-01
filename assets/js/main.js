(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  const year = document.querySelector("[data-year]");

  if (year) year.textContent = new Date().getFullYear();

  // Process videos play only while on screen; reduced-motion users get controls instead.
  const videos = document.querySelectorAll("video[data-inview]");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    videos.forEach((video) => (video.controls = true));
  } else {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.play().catch(() => {});
          else entry.target.pause();
        });
      },
      { threshold: 0.25 },
    );
    videos.forEach((video) => videoObserver.observe(video));
  }

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -4%" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
})();
