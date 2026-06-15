const feed = document.querySelector("#feed");
const sentinel = document.querySelector("#sentinel");
const originals = Array.from(feed.children).map((node) => node.cloneNode(true));

let cycle = 0;

function appendNextCycle() {
  const fragment = document.createDocumentFragment();
  originals.forEach((post) => {
    const clone = post.cloneNode(true);
    clone.dataset.cycle = String(cycle + 1);
    clone.querySelectorAll("img").forEach((image) => {
      image.loading = "lazy";
    });

    fragment.append(clone);
  });

  feed.append(fragment);
  cycle += 1;
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        appendNextCycle();
      }
    },
    { rootMargin: "1200px 0px" },
  );

  observer.observe(sentinel);
} else {
  window.addEventListener(
    "scroll",
    () => {
      const remaining =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;

      if (remaining < 1200) {
        appendNextCycle();
      }
    },
    { passive: true },
  );
}
