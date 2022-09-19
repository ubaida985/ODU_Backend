virtualenv env

env/Scripts/activate

pip install -r requirements.txt

FLASK_APP = app.py

flask --debug run
