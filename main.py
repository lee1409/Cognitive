import json
import ast
from flask import Flask, abort, Response, render_template
from flask import request
import os

app = Flask(__name__, template_folder=str(os.getcwd()))


@app.route("/")
def hello():
    return render_template("index.html")

@app.route('/submit', methods=["GET", "POST"])
def login_page():
    default_name = '0'
    data = ast.literal_eval(request.form.get('data', default_name))
    return str(data["1"])


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
