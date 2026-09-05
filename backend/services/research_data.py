from __future__ import annotations

import json
from functools import lru_cache
from pathlib import Path

DATA_FILE = Path(__file__).resolve().parents[2] / "data" / "experiments" / "research_seed.json"


@lru_cache(maxsize=1)
def load_research_data() -> dict:
    with DATA_FILE.open(encoding="utf-8") as handle:
        return json.load(handle)


def experiment_by_id(experiment_id: str) -> dict | None:
    return next((item for item in load_research_data()["experiments"] if item["id"] == experiment_id), None)
