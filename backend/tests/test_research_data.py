from services.research_data import experiment_by_id, load_research_data


def test_seed_has_only_a_recorded_example_and_study_metrics():
    data = load_research_data()
    assert data["study"]["sample_size"] == 75
    assert data["study"]["geographic_confident_completion_odds_ratio"] == 7.16
    assert experiment_by_id("tom-denney-ocala-kimi")["recorded_results"]["Kimi K2.6"]["confidence"] == 100
