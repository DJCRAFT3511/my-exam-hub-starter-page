# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MyExamHub — a static HTML/CSS/JS marketing site (education/11+ exam prep). No framework, no build step, no package manager (`package.json` does not exist), no test runner, no linter, no CI. Preview by opening the HTML files directly in a browser.

Product context and constraints live in `PRODUCT.md` — read it before adding pages or features. Key constraint: v1 must stay a static "digital brochure" but must not create structural debt that blocks future accounts/booking/search features.

## Structure

- 6 top-level HTML pages: `index.html`, `about.html`, `contact.html`, `eleven-plus.html`, `exam-preparation.html`, `school-support.html`.
- `assets/css/style.css` — single stylesheet, whole design system.
- `assets/js/main.js` — single vanilla JS file, no dependencies.

## Critical gotcha: duplicated nav/header/footer

There is no templating or include system. The header, nav, and footer markup is hand-duplicated verbatim across all 6 HTML pages. Any change to nav/header/footer must be applied identically to all 6 files — there is no build step to propagate it.

## CSS conventions (`assets/css/style.css`)

- Design system driven by CSS custom properties defined once in `:root` (`--color-*`, `--shadow-*`, `--radius-*`, `--ease-*`).
- Theming (light/dark) and palette (Burgundy/Mint vs Sage) are controlled via `data-theme` / `data-palette` attributes on `<html>`, not separate stylesheets.
- Use existing custom properties rather than hardcoding colors/values inline (one legacy inline hardcoded color exists in `index.html` — don't copy that pattern).

## JS conventions (`assets/js/main.js`)

- Single IIFE, vanilla DOM APIs only — no framework or libraries.
- Uses `var`, single-quoted strings, 2-space indentation.
- `localStorage` keys already in use: `myexamhub-theme`.

## Local tooling directories (not part of the project)

`.claude/`, `.agents/`, `.codex/`, and `skills-lock.json` are gitignored, locally-installed agent/skill tooling (installed via `npx skills@latest add emilkowalski/skills` and `npx impeccable install`). They are not authored project content — don't treat them as part of the site or commit them.
