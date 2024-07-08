from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, Jewelry, Sellers

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

# class Jewelries(Resource):

#     def get(self):
#         jewelries = [j.to_dict() for j in Jewelry.query.all()]
#         return make_response(jsonify(jewelries), 200)

# api.add_resource(Jewelries, '/')

@app.route('/', methods=['GET'])
def get_all_jewelry():
    # test = Jewelry.query.all()
    jewelries = [j.to_dict() for j in Jewelry.query.all()]
    print(f"Jewelries: {jewelries}")
    return make_response(jewelries, 200)

@app.route('/sellers', methods=['GET'])
def get_all_sellers():
    sellers = [s.to_dict() for s in Sellers.query.all()]
    return make_response(jsonify(sellers), 200)

# @app.before_first_request
# def create_tables():
#     db.create_all()

if __name__ == '__main__':
    app.run(port=5555, debug=True)

