# OrbitOps

OrbitOps is a futuristic frontend-only project management platform concept built with React, Vite, Tailwind CSS, Framer Motion, and live GitHub REST API data.

It is designed as a portfolio-grade landing experience that feels like real organizational software instead of a generic SaaS mockup. The project combines cinematic UI direction, reusable component architecture, and live delivery signals sourced from public GitHub repositories.

## Highlights

- Frontend-only architecture with no custom backend
- Real public GitHub API integration for repo overview, issues, pull requests, commits, contributors, and releases
- Large-scale landing page built from modular sections and reusable UI primitives
- Modern Vite + React structure with a locked file architecture
- Futuristic visual language with motion, glass panels, glow systems, and dense product storytelling
- Responsive layout optimized for portfolio presentation

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- TanStack Query
- Lucide React
- GitHub REST API

## Live Data Source

OrbitOps uses public GitHub REST endpoints for the live operational surfaces.

Configured repo values live in `.env` and `.env.example`:

```env
VITE_GITHUB_OWNER=vercel
VITE_GITHUB_REPO=next.js
```

The live GitHub-powered areas are primarily used in:

- `LivePulseSection`
- `RoadmapSection`
- `AnalyticsSection`

## Project Structure

The project follows a fixed architecture with dedicated folders for:

- `src/app` for the app shell and providers
- `src/pages` for page composition
- `src/sections` for landing-page feature sections
- `src/components` for shared layout, UI, chart, and feedback primitives
- `src/features/github` for API clients, hooks, and data transformation utilities
- `src/content` for centralized copy and product content
- `src/styles` for global styling, utilities, and animation layers

## Sections

OrbitOps includes a full landing-page flow with:

- Hero
- Live Pulse
- Transformation
- Capabilities
- Sticky Walkthrough
- Automation
- Collaboration
- Roadmap
- Analytics
- Integrations
- Pricing
- FAQ
- Footer

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Portfolio Positioning

This project is intentionally designed to show:

- frontend architecture maturity
- component composition at scale
- live API integration without backend complexity
- product thinking and interface storytelling
- premium visual direction for recruiter and portfolio impact

## Notes

- This project does not use mock backend data for the live operational sections
- The current thread treats the folder structure as locked
- `App.jsx` and `main.jsx` stay minimal while the section system carries the main complexity
