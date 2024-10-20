from flask import Flask, render_template
from os import getenv

app = Flask(__name__)
app.config['SECRET_KEY'] = getenv('SECRET_KEY', 'fallback_secret')

@app.route('/', methods=["GET", "POST"])
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9000, debug=True)
