from flask_cors import CORS
from flask import request
import flask
import json

app = flask.Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


def log_entry(payload):
    """
    Creates a log entry

    Args:
        payload: Data from the frontend

    Returns:
        A string value for writing to a log file.
    """

    return (
        f"[{payload['date']}] - "
        f"type-of-calculation [{payload['type']}], "
        f"inputs-received [{payload['input']}], "
        f"result [{payload['result']}] \n"
    )


@app.route("/api/logger/", methods=["POST"])
def logger():
    """
    Custom logger using data received from the frontend.

    Args:
        a byte formatted string.
        e.g.
            b'{
                'date': '3/24/2021, 3:44:27 PM',
                'type': 'combined-with',
                'input': {'first': 0.5, 'second': 0.5}
                'result': 0
            }'
    Returns:
        Either status 200 if success, else 500 when an exception occurs.
    """
    payload = dict(json.loads(request.data))
    info = log_entry(payload)
    try:
        with open("logs/log.txt", "a") as file:
            file.write(info)
        return {"status": 200}
    except Exception:
        return {"status": 500}


if __name__ == "__main__":
    app.run()
