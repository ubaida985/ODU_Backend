from flask import Flask, render_template, url_for, request, redirect
import time
from ML.main import find


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
        age=request.form.get('age')
        sex=request.form.get('sex')
        bmi=request.form.get('bmi')
        gen=request.form.get('gen')
        physical=request.form.get('physical')
        mental=request.form.get('mental')
        sleep=request.form.get('sleep')
        activity=request.form.get('activity')
        smoke=request.form.get('smoke')
        alcohol=request.form.get('alcohol')
        stroke=request.form.get('stroke')
        walk=request.form.get('walk')
        dia=request.form.get('dia')
        asthma=request.form.get('asthma')
        kidney=request.form.get('kidney')
        skin=request.form.get('skin')
        ans=find(bmi,stroke,alcohol,smoke,physical,mental,walk,sex,age,dia,activity,gen,sleep,asthma,kidney,skin)
        
        return render_template('ML.html',result=ans)
    return render_template('ML.html')

if __name__ == '__main__':
    app.run(debug=True)