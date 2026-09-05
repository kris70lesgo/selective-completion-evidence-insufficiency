from fastapi.testclient import TestClient

from main import app

client = TestClient(app)


def test_study_and_experiment_endpoints():
    assert client.get("/api/study").json()["study"]["sample_size"] == 75
    assert client.get("/api/experiments/tom-denney-ocala-kimi").status_code == 200
    assert client.get("/api/experiments/nope").status_code == 404
