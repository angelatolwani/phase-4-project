
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()


# Models go here!
class Jewelry(db.Model, SerializerMixin):
    __tablename__ = 'jewelries'

    id = db.Column(db.Integer,  primary_key=True)
    name = db.Column(db.String)
    metal = db.Column(db.String)
    type = db.Column(db.String)
    seller_id = db.Column(db.Integer, db.ForeignKey('sellers.id'))
    image = db.Column(db.String)
    price = db.Column(db.Float)

    seller = db.relationship('Sellers', back_populates="jewelry")

    serialize_rules=['-seller.jewelry']


    def __repr__(self):
        return f'<Jewelry {self.name} {self.metal} {self.type} {self.seller_id} {self.image} {self.price}>'
    
class Sellers(db.Model, SerializerMixin):
    __tablename__ = 'sellers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    location = db.Column(db.String)
    logo = db.Column(db.String)
    website = db.Column(db.String)

    jewelry = db.relationship('Jewelry', back_populates='seller')

    serialize_rules=['-jewelry.seller']

    def __repr__(self):
        return f'<Jewelry {self.name} {self.location}>'
    

    