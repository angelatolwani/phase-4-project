import os
from flask import Flask, request, make_response, jsonify, session
from models import db, Jewelry, Sellers
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restful import Resource, Api
# from config import app, db, api
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()  # link sqlalchemy with flask
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # how to connect to the db
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # optional performance thing
db.init_app(app)  # link sqlalchemy with flask


# migrate=Migrate(app, db)  # set up db migration tool (alembic)
# CORS(app, supports_credentials=True)  # set up cors
# api = Api(app)

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.before_first_request
def create_database():
     db.create_all()


if __name__ == '__main__':
    app.run(port=5555, debug=True)

