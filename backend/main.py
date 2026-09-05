from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from services.research_data import experiment_by_id, load_research_data

app = FastAPI(title="Evidence Behavior Lab API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.get("/api/study")
def study() -> dict:
    data = load_research_data()
    return {key: data[key] for key in ("study", "fact_families", "cross_model_common19", "limitations")}


@app.get("/api/experiments")
def experiments() -> list[dict]:
    return load_research_data()["experiments"]


@app.get("/api/experiments/{experiment_id}")
def experiment(experiment_id: str) -> dict:
    item = experiment_by_id(experiment_id)
    if not item:
        raise HTTPException(status_code=404, detail="Recorded experiment not found")
    return item
