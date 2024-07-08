# from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.associationproxy import association_proxy
# from flask_sqlalchemy import SQLAlchemy

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

# from config import db
from app import db

metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)

# db = SQLAlchemy()

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

    jewelry = db.relationship('Jewelry', back_populates='seller')

    serialize_rules=['-jewelry.seller']

    def __repr__(self):
        return f'<Jewelry {self.name} {self.location}>'
    

    