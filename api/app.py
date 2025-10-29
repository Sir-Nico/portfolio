import os
import time
from flask import Flask, jsonify, request, Response, send_from_directory, redirect
from datetime import datetime, timedelta


app = Flask(__name__)



@app.route('/', methods=["GET"])
def default():
    print("Hello!!")
    return jsonify({"respons": "Om du ser denne siden har du security clearances du ikke skal ha. NATO-styrker er på vei mot din lokasjon. Send en siste hilsen til dine nærmeste, de fortjener det."}), 200

@app.route('/api', methods=['GET', 'POST'])
def api():
    return jsonify({"response": "no api found"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)