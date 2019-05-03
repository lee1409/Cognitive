import json

from flask import Flask, abort, Response, render_template
from flask import request
import os

app = Flask(__name__, template_folder=str(os.getcwd()))


@app.route("/")
def hello():
    return render_template("index.html")


@app.route('/submit', methods=['POST'])
def foo():
    if not request.json:
        abort(400)
    print(request.json)
    return json.dumps(request.json)


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
