from flask import Flask, render_template, url_for, request, redirect
import time


app = Flask(__name__)

@app.route('/')
@app.route('/home')
def index():
    if request.method == 'POST':
        pass
    return render_template('index.html')

@app.route('/ML', methods=['POST', 'GET'])
def AI():
    if request.method == 'POST':
        pass
    return render_template('ML.html')

if __name__ == '__main__':
    app.run(debug=True)