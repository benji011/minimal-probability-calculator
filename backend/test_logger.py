import logger
import json
from logger import app


def test_ok_log_entry():
    payload = {
        "date": "3/24/2021, 3:44:27 PM",
        "type": "combined-with",
        "input": {"first": 0.5, "second": 0.5},
        "result": 0.25,
    }
    result = logger.log_entry(payload)
    expected = (
        "[3/24/2021, 3:44:27 PM] - "
        "type-of-calculation [combined-with], "
        "inputs-received [{'first': 0.5, 'second': 0.5}], "
        "result [0.25] \n"
    )
    assert expected == result


def test_200_logger_api():
    client = app.test_client()
    result = client.post(
        "/api/logger/",
        data=json.dumps(
            {
                "date": "3/24/2021, 3:44:27 PM",
                "type": "combined-with",
                "input": {"first": 0.5, "second": 0.5},
                "result": 0,
            }
        ).encode(),
    )
    assert result.status_code == 200


def test_500_logger_api():
    client = app.test_client()
    result = client.post("/api/logger/")
    assert result.status_code == 500
