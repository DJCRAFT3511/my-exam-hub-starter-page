---
name: new-page
description: Scaffold a new static HTML page for the MyExamHub site, reusing the existing header/nav/footer markup and following PRODUCT.md's tone and extensibility constraints. Use when the user asks to add a new page to the site.
---

Creating a new page for this static site (no build step — every page is a standalone HTML file).

1. Read `PRODUCT.md` first. Confirm the new page fits the confirmed v1 page set or is an explicitly agreed addition, and that its content follows the tone principles (friendly, clear, no jargon, trustworthy to a parent, understandable by a child).

2. Copy the `<head>`, `<header class="site-header">` (including nav, theme-toggle, palette-toggle), and `<footer class="site-footer">` blocks verbatim from an existing page (e.g. `index.html`) — do not rewrite them from scratch. Update:
   - `<title>` and the meta `description`.
   - The nav `<li>` for the new page's own link needs `aria-current="page"` moved onto it (and removed from whichever page had it, e.g. `index.html`'s Home link).
   - Footer copy stays as-is unless the user asks otherwise.

3. Add the new page's `<a href="...">` link into the `primary-nav` `<ul>` and (if appropriate) the footer's "Explore" column — **in every one of the 6 existing HTML files**, not just the new one. There is no template/include system; nav must stay identical across all pages.

4. Build the `<main>` content using existing CSS classes/custom properties from `assets/css/style.css` (`--color-*`, `--shadow-*`, `--radius-*`, `--ease-*`, existing component classes like `.hero`, `.btn`, `.container`) rather than inventing new ad hoc styles. Only add new CSS rules if no existing pattern fits.

5. If interactive behavior is needed (accordions, toggles, reveal-on-scroll), extend `assets/js/main.js` in the same style as the existing code (IIFE, `var`, single quotes, 2-space indent) rather than adding a new script file.

6. Link the new page from wherever makes sense contextually (hero CTAs, other pages' body copy) in addition to the nav/footer.
