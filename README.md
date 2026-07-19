# A11y Command Center

An accessibility operations product for tracking audit coverage, remediation progress, and conformance risk across a portfolio of digital experiences.

[Watch the running product demo](docs/demo.webm)

## Why this product matters

Accessibility work is frequently spread across audit documents and issue trackers. This command center gives product, design, and compliance teams a shared view of coverage and progress.

## Intended users

- Accessibility program managers
- Product and design-system teams
- Compliance and public-service delivery teams

## Core workflows

- Review portfolio accessibility confidence
- Compare product audits and conformance risk
- Advance remediation coverage interactively
- Navigate to portfolio insights for a broader program view

## Current capabilities

- Audit portfolio with risk labels and coverage bars
- Reactive aggregate metrics
- Interactive remediation progress
- Control-room and insights routes
- Responsive sidebar and content layout

## Vue technical highlights

- Vue 3 Composition API
- Pinia store with derived portfolio metrics
- Vue Router for control-room and insights views
- Typed state transitions and Vitest store tests
- Accessible semantic controls and responsive styling

## Architecture and data flow

Pinia owns audit records and progress actions. Vue components consume reactive store state, while computed values summarize program confidence. Router views separate operational review from insights.

## Accessibility and responsive behavior

The interface uses semantic headings, labelled regions, native interactive controls, visible status text in addition to color, keyboard-operable actions, and layouts that adapt to narrower screens. Automated tests cover the central state behavior; a production release should add continuous WCAG audits with assistive-technology review.

## Project structure

- src/views/ControlRoom.vue — audit operations
- src/views/InsightsView.vue — program insights
- src/store.ts — typed audit state and actions
- src/router.ts — application navigation
- docs/demo.webm — running workflow video

## Run locally

```bash
npm ci
npm test
npm run build
npm run dev
```

For Angular projects, `npm start` is also available for the development server.

## Verification

- Strict TypeScript compilation
- Automated component or state tests
- Production build
- Real-browser interaction check
- Demo-video playback and frame inspection

## Tradeoffs

The demonstration uses curated audit data rather than claiming automated compliance. A production system would integrate scanning tools while preserving expert review, evidence attachments, exceptions, and traceable ownership.

## Roadmap

- WCAG criterion drill-down and evidence attachments
- Issue-tracker integrations and ownership SLAs
- Multilingual accessibility statements
- Design-system component coverage
