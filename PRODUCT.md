# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS

## Users

- Parents — looking for help supporting their child's education.
- Children — from Year 2 upwards, including those preparing for the 11+ exam.
- Families — wanting ongoing school support, not just a one-time exam.
- Tutors and educators — may join the platform in future (not in v1 scope).

Primary v1 focus: parents and children around the 11+ exam. Goal: parents feel confident; children understand what help is available at each stage of school.

## Product Purpose

MyExamHub is an education website. It launches focused on 11+ exam preparation, then expands over time into a general learning hub covering a wider school-age range.

## Positioning

Built as an extensible foundation from day one rather than a single-purpose exam microsite: the initial static "digital brochure" version must not need to be torn down when later features (accounts, bookings, search) are added.

Confirmed USP: the detailed feedback report given after mock exams/practice papers — not just a score, but specific guidance on where a child should focus next. This is the concrete, differentiating proof point (vs. generic tutoring/prep sites) and should be surfaced prominently rather than buried in page copy.

## Operating Context

- Version 1 is a static site: no login, no dynamic content, informational/brochure-style.
- Future versions are expected to add accounts, bookings, and a search bar — the structure should not block these additions.

## Capabilities and Constraints

- Confirmed: static HTML/CSS for the first version.
- Confirmed: must scale in scope (11+ prep → broader learning hub) and in features (static → accounts/bookings/search) without a rebuild.
- Confirmed v1 page set: Home; About the Learning Journey; School Support (general, splits by subject/year later); Exam Preparation (general revision/exam support, not just 11+); 11+ Support (most detailed page now — mock exams, prep courses, practice papers, future booking note, FAQs, tips for success, structured so it can later split by year/subject); Contact (details + short enquiry form, room for booking later).
- Confirmed: navigation must stay identical across every page; page sections should be reusable/composable for fast future page creation; every page should make clear what help is available, who it's for, where resources are, and how to get in touch, ending in a clear next-step CTA.
- Confirmed future-only (not built now, but must not require a rebuild): CMS, student accounts + parent dashboard, online booking, search bar, downloadable resources/blog, per-subject/per-year pages (Year 2–6+), video lessons/guided pathways.
- Confirmed tone for all site copy: friendly and encouraging, professional but not stiff, clear and simple (no academic jargon), positive — understandable by a child, trustworthy to a parent.
- Undecided: specific future feature set and timeline; specific subjects/content beyond 11+ prep.

## Brand Commitments

Name: MyExamHub.

## Evidence on Hand

None yet — greenfield project. No existing logo, copy, or testimonials to preserve.

## Product Principles

1. Design for growth: today's 11+ focus is one branch of a larger learning-hub tree, not the whole product.
2. Static now, extensible later: the v1 build must not create structural debt that blocks accounts, bookings, or search.
3. Trust and clarity for a parent audience evaluating an education product for their child.
4. Warm and welcoming, modern and clean, calm and professional, friendly for children without being childish — not a generic off-the-shelf template feel.
5. Consistent, reusable page structure (fixed nav, reusable sections) so new pages are fast and coherent to add later.
