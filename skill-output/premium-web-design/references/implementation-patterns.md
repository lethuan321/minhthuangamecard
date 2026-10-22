# Implementation patterns

Use these only when they fit the project. Map them onto existing tokens when available.

## Starting tokens

```css
:root {
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: .75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --section-space: clamp(3rem, 7vw, 7.5rem);
  --radius-sm: .25rem;
  --radius-md: .5rem;
  --radius-lg: 1rem;
  --shadow-soft: 0 2px 4px rgb(0 0 0 / .04),
                 0 12px 32px rgb(0 0 0 / .08);
  --ease-reveal: cubic-bezier(.16, 1, .3, 1);
  --ease-ui: cubic-bezier(.25, 1, .5, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
}

.section { padding-block: var(--section-space); }
.prose { max-inline-size: 70ch; line-height: 1.6; }
.hero-title { font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1.1; }
```

Add the actual brand palette rather than treating this as a complete design system.

## Progressively enhanced reveal

Content is visible by default. Only mark an offscreen element for animation after an observer exists. Failures restore visibility. Do not apply this to the hero or other immediately needed content.

```css
[data-reveal] { opacity: 1; transform: none; }
[data-reveal].reveal-pending {
  opacity: 0;
  transform: translateY(20px);
}
[data-reveal].reveal-running {
  transition: opacity 500ms var(--ease-reveal),
              transform 500ms var(--ease-reveal);
}
@media (prefers-reduced-motion: reduce) {
  [data-reveal].reveal-pending {
    opacity: 1;
    transform: none;
  }
  [data-reveal].reveal-running { transition: none; }
}
```

```js
function enhanceReveals(root = document) {
  const elements = [...root.querySelectorAll('[data-reveal]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return () => {};
  let observer;
  const restore = () => {
    observer?.disconnect();
    elements.forEach(el => {
      el.classList.remove('reveal-pending', 'reveal-running');
    });
  };
  try {
    observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.remove('reveal-pending');
        observer.unobserve(target);
      });
    }, { threshold: 0 });
    elements.forEach(el => {
      if (el.getBoundingClientRect().top < innerHeight) return;
      observer.observe(el);
      el.classList.add('reveal-pending');
      // Commit the initial state before enabling transitions.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (el.classList.contains('reveal-pending')) {
          el.classList.add('reveal-running');
        }
      }));
    });
    motion.addEventListener('change', restore);
  } catch {
    restore();
  }
  return () => {
    restore();
    motion.removeEventListener('change', restore);
  };
}
```

Call the returned cleanup function when the containing component unmounts. Adapt this to the framework lifecycle; do not run DOM mutation during rendering.
