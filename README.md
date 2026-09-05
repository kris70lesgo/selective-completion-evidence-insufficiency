# Evidence Behavior Lab

A local research demonstration for **Selective Completion Under Evidence Insufficiency**.

## Run locally

In one terminal:

```sh
cd /Users/agastya/Documents/pbl/backend
.venv/bin/uvicorn main:app --reload --port 8000
```

In another terminal:

```sh
cd /Users/agastya/Documents/pbl/frontend
npm run dev
```

Open `http://localhost:3000`.

## Research data integrity

`data/experiments/research_seed.json` is the UI/API source of truth. It contains only the aggregate values and Kimi-recorded example explicitly provided in the project brief. The raw project exports were not present in this repository, so the app deliberately does not produce a fabricated by-fact-family outcome chart.

When available, add the original labeled CSV at `data/experiments/missing_75_labeled.csv` and extend the normalized loader; do not alter source research outputs.

## Checks

```sh
cd /Users/agastya/Documents/pbl/backend && .venv/bin/python -m pytest tests -q
cd /Users/agastya/Documents/pbl/frontend && npm run lint && npm run build
```
