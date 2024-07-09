from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS


from models import db, Jewelry, Sellers

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

CORS(app, supports_credentials=True)  # set up cors

@app.route('/', methods=['GET', 'PATCH'])
def get_all_jewelry():
    if request.method == 'GET':
        jewelries = [j.to_dict() for j in Jewelry.query.all()]
        return make_response(jsonify(jewelries), 200)

@app.route('/form', methods=['POST'])
def add_new_jewelry():
    data = request.get_json()

    new_item = Jewelry(
        name=data['name'],
        metal=data['metal'], 
        type=data['type'],
        seller_id=data['seller_id'], 
        image=data['image'],
        price=data['price'],
    )

    db.session.add(new_item)
    db.session.commit()

    return make_response(new_item.to_dict(), 201)

@app.route('/sellers/form', methods=['POST'])
def add_new_sellers():
    data = request.get_json()

    new_seller = Sellers(
        name=data['name'],
        location=data['location'], 
        logo=data['logo'],
        website=data['website']
    )

    db.session.add(new_seller)
    db.session.commit()

    return make_response(new_seller.to_dict(), 201)

@app.route('/<int:id>', methods=['PATCH', 'DELETE'])
def delete_item(id):
    item = Jewelry.query.filter(Jewelry.id == id).first()

    if request.method=='DELETE':
        
        db.session.delete(item)
        db.session.commit()

        return {}, 204
    elif request.method=='PATCH':
        data = request.get_json()

        for attr in data:
             setattr(item, attr, data[attr])
        db.session.add(item)
        db.session.commit()

        response_dict = item.to_dict()

        return make_response(response_dict, 200)


@app.route('/sellers', methods=['GET'])
def get_all_sellers():
    sellers = [s.to_dict() for s in Sellers.query.all()]
    return make_response(jsonify(sellers), 200)

@app.before_first_request
def create_tables():
    db.create_all()

if __name__ == '__main__':
    app.run(port=5555, debug=True)

