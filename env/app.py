from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('base.html')

@app.route('/comprar')
def comprar():
    return render_template('comprar-tiquetes.html')

@app.route('/login')
def login():
    return render_template('register.html')