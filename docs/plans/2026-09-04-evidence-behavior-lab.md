# Evidence Behavior Lab Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a local, credible research demonstration for controlled missing-evidence experiments.

**Architecture:** A Next.js static interface reads a normalized local research seed file through a small FastAPI read-only API. The seed holds only values stated in the supplied brief; UI sections requiring unavailable raw exports explicitly disclose that limitation.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Recharts, FastAPI, pytest.

---

### Task 1: Establish source-of-truth data

**Files:**
- Create: `data/experiments/research_seed.json`
- Create: `backend/services/research_data.py`
- Test: `backend/tests/test_research_data.py`

**Step 1:** Write a failing test for the documented seed fields and the recorded Kimi experiment.

**Step 2:** Implement a read-only loader that validates and returns the seed.

**Step 3:** Run `python -m pytest backend/tests -q`.

### Task 2: Provide a small local API

**Files:**
- Create: `backend/main.py`
- Create: `backend/requirements.txt`
- Test: `backend/tests/test_api.py`

**Step 1:** Test endpoints for study summary, experiments, and an experiment result.

**Step 2:** Implement FastAPI endpoints with CORS restricted for local development.

**Step 3:** Run `python -m pytest backend/tests -q`.

### Task 3: Build the research interface

**Files:**
- Create: `frontend/app/*`
- Create: `frontend/components/*`
- Create: `frontend/lib/research.ts`

**Step 1:** Scaffold the Next.js app with a local-only data module as an instant fallback.

**Step 2:** Implement overview, experiment, and findings routes with semantic navigation and responsive layouts.

**Step 3:** Use charts only for source-backed aggregate measures; show an explicit unavailable-data panel for missing per-family counts.

### Task 4: Verify the PBL flow

**Files:**
- Test: `frontend` build and lint scripts

**Step 1:** Run frontend lint and production build.

**Step 2:** Run backend tests.

**Step 3:** Start both services locally and smoke-test all routes and experiment interaction.
