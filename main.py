import json
import ast
from flask import Flask, abort, Response, render_template
from flask import request
import os
import csv

app = Flask(__name__, template_folder=str(os.getcwd()))


@app.route("/")
def hello():
    return render_template("index.html")


@app.route('/submit', methods=["GET", "POST"])
def login_page():
    default_name = '0'
    data = ast.literal_eval(request.form.get('data', default_name))
    correct = 0
    for i in data["1"]:
        if "true" in i:
            correct += 1

    with open('data.csv', 'a') as csvFile:
        writer = csv.writer(csvFile)
        writer.writerow(data["1"])
    return render_template('submit.html', correct=correct)


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
