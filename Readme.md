## Run commands:-

* pip install virtual env

* virtualenv env

* env/Scripts/activate

* pip install -r requirements.txt

* FLASK_APP = app.py

* flask --debug run

### Note:- Python version 3.9

## File structure:-

### app.py- main backend with routes and logic

### Templates- html files

### Static-
* assets
* css
* fonts
* images
* js
* webfonts

ML- machine learning files and algorithms

## Setting path for flask
* General Syntax \
    {{ url_for(FOLDER NAME, filename=PATH) }} \
    EXAMPLE:- \
    {{ url_for('static', filename='/css/all.css') }}
    
## Adding Routes in flask (inside app.py)
    @app.route(PATH, methods=['POST', 'GET'])
    def FUNCTION_NAME():
        return render_template(HTML FILE)
    example:-
    @app.route('/home')
    def index():
      return render_template('index.html')
      
### Note:- all the file are already linked in the Layout HTML NAV section set routes according to that only.
### Note:- Jinja inheritance should be used accross the files.


